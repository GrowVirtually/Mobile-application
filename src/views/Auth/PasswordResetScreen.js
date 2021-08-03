import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import * as Colors from "../../styles/abstracts/colors";
import {validateEmail} from "../../utils/validators";

const PasswordResetScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailErrors, setEmailErrors] = useState([]);

  const handleEmailChange = email => {
    validateEmail(email, emailErrors, setEmailErrors);
    setEmail(email);
  };

  const handlePasswordReset = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter your email</Text>
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

      {!!email && !emailErrors.length && (
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.btnText}>Send password reset email</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <MaterialIcons name="arrow-back" /> */}
        <Text style={styles.linkText}>Go back</Text>
      </TouchableOpacity>
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