import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Colors from '../../styles/abstracts/colors';

export const SignupScreen1 = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [validationErrors, setError] = useState([]);

  const validateName = (name, isFirstName = true) => {
    const letterRegex = /^[a-zA-Z]+$/;
    if (!name || letterRegex.test(name)) {
      if (isFirstName) {
        setFirstName(name);
      } else {
        setLastName(name);
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email || emailRegex.test(email)) {
      setError(validationErrors.filter(error => error !== 'email'));
      setEmail(email);
    } else {
      setError([
        ...validationErrors,
        'email',
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tell us about you</Text>
      <View>
        <Text>Please enter your first name</Text>
        <TextInput style={styles.textInput}
                   value={firstName}
                   onChangeText={name => validateName(name)} />
        <Text>Please enter your last name</Text>
        <TextInput style={styles.textInput}
                   value={lastName}
                   onChangeText={name => validateName(name, false)} />
        <Text>Enter your email</Text>
        <TextInput style={styles.textInput}
                   onChangeText={email => validateEmail(email)} />
        {validationErrors.includes('email') && (
          <Text style={styles.error}>Wrong email</Text>
        )}
      </View>
      {(!!firstName && !!lastName && !!email && !validationErrors.length) && (
        <Button title={'Next'}
        onPress={() => navigation.navigate('SignupScreen2')}/>
      )}

      <Button title={'Go to path decider'}
              onPress={() => navigation.navigate('SignUpPathDeciderScreen')} />
    </View>
  );
};

export default SignupScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
  },
  error: {
    color: Colors.errorColor,
  },
});
