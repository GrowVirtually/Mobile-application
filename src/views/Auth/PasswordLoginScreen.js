/* eslint-disable react-native/sort-styles */
import React, {useState, useContext} from "react";
import axios from "axios";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import {HOST_PORT} from "@env";
import * as Colors from "../../styles/abstracts/colors";
import AuthContext from "../../context/auth-context";
import {validateEmail, validatePassword} from "../../utils/validators";

const PasswordLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState([]);
  const [pwErrors, setPwErrors] = useState([]);
  const [errors, setErrors] = useState([]);

  const {authContext} = useContext(AuthContext);

  const handleEmailChange = email => {
    validateEmail(email, emailErrors, setEmailErrors);
    setEmail(email);
  };

  const handlePasswordChange = pwd => {
    validatePassword(pwd, pwErrors, setPwErrors);
    setPassword(pwd);
  };

  const handleSignIn = async () => {
    try {
      const logUser = await axios.post(`${HOST_PORT}/api/v1/users/login`, {
        email,
        password,
      });
      if (logUser.data.status === "success") {
        const {token} = logUser.data.token;
        const {signIn} = authContext;
        await signIn(token);
        navigation.navigate("MainStackNavigator");
      }
    } catch (err) {
      const {message} = err.response.data;
      setErrors([...errors, message]);
      console.log(message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login using {"\n"}your password</Text>
      <TextInput
        label="Email"
        onChangeText={email => handleEmailChange(email)}
        style={styles.textInput}
        mode="outlined"
        autoFocus
        error={emailErrors.includes("email") && true}
        selectionColor={Colors.secondary.color}
        theme={{
          colors: {
            primary: Colors.primary.color,
            underlineColor: "transparent",
            background: "#fff",
          },
        }}
      />
      {!!emailErrors.length && <Text style={styles.helperText}>{emailErrors[0]}</Text>}

      <TextInput
        style={styles.textInput}
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        mode="outlined"
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

      {!!errors.length && <Text style={styles.helperText}>{errors[0]}</Text>}

      {!!email && !!password && !emailErrors.length && !pwErrors.length && (
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
        {/* <MaterialIcons name="arrow-back" /> */}
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <MaterialIcons name="arrow-back" /> */}
        <Text style={styles.linkText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PasswordLoginScreen;

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
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: Colors.primary.color,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  linkText: {
    color: Colors.secondary.color,
    fontSize: 14,
    marginTop: 30,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  helperText: {
    color: Colors.errorColor.color,
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  textInput: {
    marginTop: 20,
    width: "80%",
  },
});
