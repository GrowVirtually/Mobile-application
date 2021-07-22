import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';
import AuthContext from '../../context/auth-context';
import {HOST, PORT} from '@env';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axios from 'axios';

const MobileNumberVerifyScreen = ({navigation, route}) => {
  const CELL_COUNT = 4;

  const [userOTP, setValue] = useState('');
  const ref = useBlurOnFulfill({userOTP, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    userOTP,
    setValue,
  });
  const [errors, setErrors] = useState([]);

  const {authContext} = useContext(AuthContext);

  const handleOTPVerification = async () => {
    try {
      const otpVerification = await axios.post(
        `http://${HOST}:${PORT}/api/v1/users/verifyOTP`,
        {
          phone: route.params.phone,
          hash: route.params.hash,
          otp: userOTP,
        },
      );

      if (otpVerification.data.status === 'success') {
        // otp verified
        // check user found or not
        if (otpVerification.data.userFound) {
          console.log(otpVerification.data);
          const {token} = otpVerification.data;
          const {signIn} = authContext;
          // 1) set the token to async storage
          await signIn(token);
          navigation.navigate('MainStackNavigator');
        } else if (!otpVerification.data.userFound) {
          navigation.navigate('SignupScreen1', {
            phone: otpVerification.data.phone,
          });
        }
      }
    } catch (err) {
      const {message} = err.response.data;
      setErrors([...errors, message]);
      console.log(message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        animation={'bounceIn'}
        duration={1500}
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode={'stretch'}
      />
      <Text style={styles.heading}>{`Enter the code\nwe sent to you`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={userOTP}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {userOTP.length === 4 && (
        <TouchableOpacity style={styles.button} onPress={handleOTPVerification}>
          <Text style={styles.btnText}>Ok</Text>
        </TouchableOpacity>
      )}

      {!!errors.length && <Text>{errors[0]}</Text>}

      <TouchableOpacity
        onPress={() => navigation.navigate('EnterMobileNumberScreen')}>
        <Text style={styles.linkText}>Not your number?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileNumberVerifyScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Colors.secondary.color,
    borderWidth: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary.color,
    marginBottom: 10,
  },
  logo: {
    ...Base.logoLarge,
    // width:'100%',
  },
  linkText: {
    fontSize: 14,
    color: Colors.secondary.color,
    textDecorationLine: 'underline',
    textAlign: 'center',
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
});
