import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';

const EnterMobileNumberScreen = ({ navigation }) => {
  const [data, setData] = useState({
    signIn: true,
    mobileNumber: '',
  });
  const [systemOTP, setOTP] = useState('');

  const validateMobileNumber = (number) => {

    const regex = /^\d*(\.\d{0, 2})?$/;

    if ((!number || regex.test(number.toString())) && data.mobileNumber.length < 10) {
      setData({
        ...data,
        mobileNumber: number,
      });
    }

  };

  const handleSendOTP = async () => {
    // 1. send OTP code to mobile
    try {
      // backend call to get the OTP [TODO]
      // fetch call
      const getOTP = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2003);
        }, 2000);
      });

      const OTP = await getOTP;

      setOTP(OTP);
      // navigation.navigate('MobileNumberVerifyScreen', { systemOTP });

    } catch (err) {
      alert(err);
    }
  };

  useEffect(  () => {

    if (systemOTP) {
      alert('hi');
    // const otp = systemOTP;
      // navigation.navigate('MobileNumberVerifyScreen', { systemOTP })
    }
  }, [systemOTP]);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`Enter your\n mobile number`} </Text>
      <Text style={styles.subHeading}>We will text you a verification code. Message and data rates may apply</Text>
      <TextInput style={styles.textInput}
                 onChangeText={validateMobileNumber}
                 value={data.mobileNumber}
                 keyboardType={'numeric'}
                 autoFocus={true}
      />
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      {/* validate input and if there is number proceed */}
      {data.mobileNumber.length === 10 &&
      <Button title={'Send OTP'} onPress={handleSendOTP} />
      }
    </View>

  );

};

export default EnterMobileNumberScreen;

const { width } = Dimensions.get('screen');
const widthTextInput = width * 0.9;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: 'blue',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  textInput: {
    width: widthTextInput,
    borderWidth: 1,
  },
});


