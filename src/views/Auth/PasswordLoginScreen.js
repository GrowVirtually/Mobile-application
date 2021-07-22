import React, { useState } from "react";
import { TextInput, View } from "react-native";
import * as Colors from "../../styles/abstracts/colors";

const PasswordLoginScreen = () => {

  const [email, setEmail] = useState('');

  const [validationErrors, setError] = useState([]);

  const validateEmail = email => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email || emailRegex.test(email)) {
      setError(validationErrors.filter(error => error !== 'email'));
      setEmail(email);
    } else {
      setError([...validationErrors, 'email']);
    }
  };

  return (
    <View>
      {/*<View>*/}
      {/*  <TextInput*/}
      {/*    label="Email"*/}
      {/*    onChangeText={email => validateEmail(email)}*/}
      {/*    style={styles.textInput}*/}
      {/*    mode="outlined"*/}
      {/*    // TODO: blame johnny why true?*/}
      {/*    error={validationErrors.includes('email') && true}*/}
      {/*    selectionColor={Colors.secondary.color}*/}
      {/*    theme={{*/}
      {/*      colors: {*/}
      {/*        primary: Colors.primary.color,*/}
      {/*        underlineColor: 'transparent',*/}
      {/*        background: '#fff',*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );

};

export default PasswordLoginScreen;
