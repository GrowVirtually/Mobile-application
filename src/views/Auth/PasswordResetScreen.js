import React, {useContext, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import {HOST_PORT} from "@env";
import * as Colors from "../../styles/abstracts/colors";
import {pwErrorMessages, validatePassword} from "../../utils/validators";
import * as Base from "../../styles/base/base";
import AuthContext from "../../context/auth-context";
import axios from "axios";

const PasswordResetScreen = ({navigation, route}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwErrors, setPwErrors] = useState([]);
  const [errors, setErrors] = useState([]);
  const {authContext} = useContext(AuthContext);

  const handlePasswordChange = (pwd, isPwConfirm = false) => {
    if (isPwConfirm) {
      setConfirmPassword(pwd);
    } else {
      validatePassword(pwd, pwErrors, setPwErrors);
      setPassword(pwd);
    }
  };

  const handleResetPassword = async () => {
    try {
      const result = await axios.patch(
        `${HOST_PORT}/api/v1/users/resetPassword/${route.params.token}`,
        {
          password,
        },
      );
      // TODO: after changing the pw, display a flash message like "successfully changed pw"
      const {token} = result.data.token;
      const {signIn} = authContext;
      await signIn(token);
      navigation.navigate("MainStackNavigator");
    } catch (err) {
      const {message} = err.response.data;
      setErrors([...errors, message]);
    }
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.textInput}
          label="New password"
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
        {!!errors.length && <Text style={styles.helperText}>{errors[0]}</Text>}
      </View>
      {!!password && !errors.length && !pwErrors.length && password === confirmPassword && (
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.btnText}>Change Password</Text>
        </TouchableOpacity>
      )}
      {!!errors.length && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <MaterialIcons name="arrow-back" /> */}
          <Text style={styles.linkText}>Go back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PasswordResetScreen;

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
