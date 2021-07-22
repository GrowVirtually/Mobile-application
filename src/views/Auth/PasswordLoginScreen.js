import React, {useState} from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-paper";
import * as Colors from "../../styles/abstracts/colors";

const PasswordLoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");

  const [validationErrors, setError] = useState([]);

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email || emailRegex.test(email)) {
      setError(validationErrors.filter(error => error !== "email"));
      setEmail(email);
    } else {
      setError([...validationErrors, "email"]);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          label="Email"
          onChangeText={email => validateEmail(email)}
          style={styles.textInput}
          mode="outlined"
          error={validationErrors.includes("email") && true}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        {validationErrors.includes("email") && <Text style={styles.helperText}>Wrong email</Text>}
      </View>
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
