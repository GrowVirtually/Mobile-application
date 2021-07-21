import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Button, StyleSheet, Text, View} from 'react-native';
import * as Colors from '../../styles/abstracts/colors';
import axios from 'axios';
import * as Base from '../../styles/base/base';
import AuthContext from '../../context/auth-context';
import {TextInput} from 'react-native-paper';

const SignupScreen2 = ({navigation, route}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwErrors, setPwErrors] = useState([]);

  const {authContext} = useContext(AuthContext);

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
    lessCharacters: 'Password must contain at least 8 characters',
    pwNotMatch: 'Passwords does not match',
  };

  const pwErrorChecker = pwd => {
    // predicates
    pwd.length < 8
      ? pwErrorAggregator(pwErrorMessages.lessCharacters)
      : pwErrorCuttingUp(pwErrorMessages.lessCharacters);
  };

  const pwErrorAggregator = errorMessage => {
    setPwErrors([...pwErrors, errorMessage]);
  };

  const pwErrorCuttingUp = errorMessage => {
    setPwErrors(pwErrors.filter(pwe => pwe !== errorMessage));
  };

  const handleSignup = async () => {
    try {
      const addUser = await axios.post(
        'http://10.0.2.2:3000/api/v1/users/signup',
        {
          fname: route.params.firstName,
          lname: route.params.lastName,
          email: route.params.email,
          tel: route.params.phone,
          password,
        },
      );
      if (addUser.data.status === 'success') {
        // set async storage
        const {token} = addUser.data.token;
        const {signIn} = authContext;
        await signIn(token);
        console.log(addUser);
        navigation.navigate('MainStackNavigator');
      } else {
        // properly handle errors [TODO]
        alert('Cannot create user');
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
          secureTextEntry={true}
          autoCapitalize={'none'}
          mode="outlined"
          autoFocus={true}
          onChangeText={pw => handlePasswordChange(pw)}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
        {!!pwErrors.length && (
          <Text style={styles.helperText}>{pwErrors[0]}</Text>
        )}
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          label="Re enter password"
          secureTextEntry={true}
          mode="outlined"
          autoCapitalize={'none'}
          onChangeText={pw => handlePasswordChange(pw, true)}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: 'transparent',
              background: '#fff',
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

      <TouchableOpacity onPress={() => navigation.navigate('SignUpPathDeciderScreen')}>
        <Text style={styles.linkText}>Change of mind? Buy or sell?</Text>
        </TouchableOpacity>
    </View>
  );
};
export default SignupScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  error: {
    color: Colors.errorColor,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary.color,
    marginBottom: 20,
  },
  logo: {
    ...Base.logoLarge,
    alignSelf: 'center',
  },
  linkText: {
    fontSize: 14,
    color: Colors.secondary.color,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
  textInput: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary.color,
    marginTop: 25,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  helperText: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.errorColor.color,
    marginTop: 10,
  },
});
