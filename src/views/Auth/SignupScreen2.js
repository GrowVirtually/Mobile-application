import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Colors from '../../styles/abstracts/colors';

const SignupScreen2 = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pwErrors, setPwErrors] = useState([]);

    const handlePasswordChange = (pwd, isPwConfirm = false) => {
      if (isPwConfirm) {
        setConfirmPassword(pwd);
      } else {
        pwErrorChecker(pwd);
        setPassword(pwd);
      }
    };

    const pwErrorMessages = {
      // all kinds of pw error messages
      'lessCharacters': 'Password must contain at least 8 characters',
      'pwNotMatch': 'Passwords does not match',
    };

    const pwErrorChecker = (pwd) => {
      // predicates
      pwd.length < 8 ? pwErrorAggregator(pwErrorMessages.lessCharacters) :
        pwErrorCuttingUp(pwErrorMessages.lessCharacters);
    };

    const pwErrorAggregator = (errorMessage) => {
      setPwErrors([
        ...pwErrors,
        errorMessage,
      ]);
    };

    const pwErrorCuttingUp = (errorMessage) => {
      setPwErrors(
        pwErrors.filter(pwe => pwe !== errorMessage),
      );
    };

    return (
      <View style={styles.container}>
        <Text>Security First</Text>
        <View>
          <Text>Create a Password</Text>
          <TextInput style={styles.textInput}
                     secureTextEntry={true}
                     autoCapitalize={'none'}
                     onChangeText={pw => handlePasswordChange(pw)} />
          {!!pwErrors.length && (
            <Text>{pwErrors[0]}</Text>
          )}
        </View>
        <View>
          <Text>Re enter your password</Text>
          <TextInput style={styles.textInput}
                     secureTextEntry={true}
                     autoCapitalize={'none'}
                     onChangeText={pw => handlePasswordChange(pw, true)} />
          {password !== confirmPassword && (
            <Text>{pwErrorMessages.pwNotMatch}</Text>
          )}
        </View>
        <Button title={'Back'}
                onPress={() => navigation.goBack()} />
        {(!!password && !pwErrors.length && password === confirmPassword) && (
          <Button title={'Finish'} onPress={() => navigation.navigate('MainStackNavigator')} />
        )}

        <Button title={'Go to path decider'}
                onPress={() => navigation.navigate('SignUpPathDeciderScreen')} />
      </View>
    );

  }
;

export default SignupScreen2;

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
