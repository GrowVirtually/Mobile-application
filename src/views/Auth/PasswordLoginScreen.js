import React, {useState, useContext} from "react";
import axios from "axios";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import {HOST, PORT} from "@env";
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
      const logUser = await axios.post(`http://${HOST}:${PORT}/api/v1/users/login`, {
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
      <View>
        <TextInput
          label="Email"
          onChangeText={email => handleEmailChange(email)}
          style={styles.textInput}
          mode="outlined"
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
      </View>
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

      {!!errors.length && <Text>{errors[0]}</Text>}

      {!!email && !!password && !emailErrors.length && !pwErrors.length && (
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <MaterialIcons name="arrow-back" /> */}
        <Text style={styles.linkText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PasswordLoginScreen;

const {width} = Dimensions.get("screen");
const widthTextInput = width * 0.9;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    flexDirection: "column",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary.color,
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
  },
  buttonDisabled: {
    backgroundColor: "grey",
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  heading: {
    color: Colors.primary.color,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    color: Colors.secondary.color,
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  miniBtn: {
    backgroundColor: Colors.secondary.color,
    flex: 1,
    padding: 5,
  },
  subHeading: {
    color: Colors.fontColor.color,
    fontSize: 15,
    padding: 30,
    textAlign: "center",
  },
  textInput: {
    marginBottom: 20,
    width: widthTextInput,
  },
});
