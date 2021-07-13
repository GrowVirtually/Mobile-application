import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';
import {TextInput} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignupScreen2 = ({navigation}) => {
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

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Security First</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={pw => handlePasswordChange(pw)}
        secureTextEntry={showPassword}
        placeholder="Enter your password"
        autoCapitalize={'none'}
        label="Password"
        mode="outlined"
        autoFocus={true}
        error={!!pwErrors.length && true}
        theme={{
          colors: {
            primary: Colors.primary.color,
            underlineColor: 'transparent',
            background: '#fff',
          },
        }}
        right={<TextInput.Icon onPress={togglePassword} name="eye" />}
      />
      {!!pwErrors.length && (
        <Text style={styles.helperText}>{pwErrors[0]}</Text>
      )}

      <TextInput
        style={styles.textInput}
        onChangeText={pw => handlePasswordChange(pw, true)}
        secureTextEntry={showPassword}
        autoCapitalize={'none'}
        label="Password"
        placeholder="Re-enter your password"
        mode="outlined"
        error={password !== confirmPassword && true}
        theme={{
          colors: {
            primary: Colors.primary.color,
            underlineColor: 'transparent',
            background: '#fff',
          },
        }}
        right={<TextInput.Icon onPress={togglePassword} name="eye" />}
      />
      {password !== confirmPassword && (
        <Text style={styles.helperText} t>
          {pwErrorMessages.pwNotMatch}
        </Text>
      )}

      <TouchableOpacity
        style={styles.miniBtn}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          size={20}
          color={Colors.secondary.color}
          name="arrow-back"
        />
        <Text style={styles.miniBtnTxt}>Back</Text>
      </TouchableOpacity>
      {!!password && !pwErrors.length && password === confirmPassword && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainStackNavigator')}>
          <Text style={styles.btnText}>Finish</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpPathDeciderScreen')}>
        <Text style={styles.linkText}>Change of mind, buy or sell ?</Text>
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
    marginTop: 10,
  },
  textInput: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary.color,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  miniBtn: {
    borderColor: Colors.secondary.color,
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  miniBtnTxt: {
    padding: 5,
    color: Colors.secondary.color,
    fontWeight: 'bold',
  },
  helperText: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.errorColor.color,
    marginBottom: 15,
  },
});
