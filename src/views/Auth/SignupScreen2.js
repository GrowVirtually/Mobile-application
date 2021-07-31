import React, {useContext, useState} from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {TextInput} from "react-native-paper";
import {HOST, PORT} from "@env";
import * as Colors from "../../styles/abstracts/colors";
import * as Base from "../../styles/base/base";
import AuthContext from "../../context/auth-context";

import {validatePassword, pwErrorMessages} from "../../utils/validators";

const SignupScreen2 = ({navigation, route}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwErrors, setPwErrors] = useState([]);

  const {authContext} = useContext(AuthContext);

  const handlePasswordChange = (pwd, isPwConfirm = false) => {
    if (isPwConfirm) {
      setConfirmPassword(pwd);
    } else {
      validatePassword(pwd, pwErrors, setPwErrors);
      setPassword(pwd);
    }
  };

  const handleSignup = async () => {
    try {
      const addUser = await axios.post(`http://${HOST}:${PORT}/api/v1/users/signup`, {
        fname: route.params.firstName,
        lname: route.params.lastName,
        email: route.params.email,
        phone: route.params.phone,
        password,
      });
      if (addUser.data.status === "success") {
        // set async storage
        const {token} = addUser.data.token;
        const {signIn} = authContext;
        await signIn(token);
        console.log(addUser);
        navigation.navigate("MainStackNavigator");
      } else {
        // properly handle errors [TODO]
        alert("Cannot create user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Security First</Text>
      <View>
        <TextInput
          style={styles.textInput}
          label="Password"
          secureTextEntry
          autoCapitalize="none"
          mode="outlined"
          autoFocus
          onChangeText={pw => handlePasswordChange(pw)}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        {!!pwErrors.length && <Text style={styles.helperText}>{pwErrors[0]}</Text>}
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          label="Re enter password"
          secureTextEntry
          mode="outlined"
          autoCapitalize="none"
          onChangeText={pw => handlePasswordChange(pw, true)}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        {password !== confirmPassword && (
          <Text style={styles.helperText}>{pwErrorMessages.pwNotMatch}</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Back</Text>
      </TouchableOpacity>
      {!!password && !pwErrors.length && password === confirmPassword && (
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.btnText}>Finish</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("SignUpPathDeciderScreen")}>
        <Text style={styles.linkText}>Change of mind? Buy or sell?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignupScreen2;

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: Colors.primary.color,
    borderRadius: 10,
    marginTop: 25,
    padding: 15,
    width: "80%",
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  error: {
    color: Colors.errorColor,
  },
  heading: {
    color: Colors.primary.color,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  helperText: {
    color: Colors.errorColor.color,
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  linkText: {
    color: Colors.secondary.color,
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  logo: {
    ...Base.logoLarge,
    alignSelf: "center",
  },
  textInput: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
  },
});
