import React, {useState} from "react";
import {TouchableOpacity, StyleSheet, Text, View, StatusBar} from "react-native";
import {TextInput} from "react-native-paper";
import * as Colors from "../../styles/abstracts/colors";
import * as Base from "../../styles/base/base";

import {validateName, validateEmail} from "../../utils/validators";

export const SignupScreen1 = ({navigation, route}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [emailErrors, setEmailErrors] = useState([]);

  const handleNameChange = (name, state, setState) => {
    validateName(name, state, setState);
  };

  const handleEmailChange = email => {
    validateEmail(email, emailErrors, setEmailErrors);
    setEmail(email);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <Text style={styles.heading}>Tell us about you</Text>
      <View>
        <TextInput
          label="First name"
          value={firstName}
          onChangeText={name => handleNameChange(name, firstName, setFirstName)}
          style={styles.textInput}
          mode="outlined"
          autoFocus
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />

        <TextInput
          label="Last name"
          value={lastName}
          onChangeText={name => handleNameChange(name, lastName, setLastName)}
          style={styles.textInput}
          mode="outlined"
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />

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
      {!!firstName && !!lastName && !!email && !emailErrors.length && (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("SignupScreen2", {
              firstName,
              lastName,
              email,
              phone: route.params.phone,
            })
          }>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("SignUpPathDeciderScreen")}>
        <Text style={styles.linkText}>Change of mind, buy or sell ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen1;

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
    marginTop: 50,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  textInput: {
    alignSelf: "center",
    marginTop: 20,
    width: "80%",
  },
});
