import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';
import * as Typography from '../../styles/base/typography';
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-paper';
import axios from 'axios';


const EnterMobileNumberScreen = ({ navigation }) => {
  const [data, setData] = useState({
    signIn: true,
  });
  const [mobileNumber, setMobileNumber] = useState('07');
  const [systemOTP, setOTP] = useState('');

  const validateMobileNumber = (number) => {
    const allowBackspace = number.length === mobileNumber.length - 1;

    const regex = /^\d*(\.\d{0, 2})?$/;

    if (
      (!number || allowBackspace || regex.test(number.toString())) &&
      (number.length <= 10 && number.length >= 2)
    ) {
      setMobileNumber(number);
    }
  };

  const handleSendOTP = async () => {

    // serialize phone number
    const newMobile = mobileNumber.replace(mobileNumber.charAt(0), '+94');

    // 1. send OTP code to mobile
    try {
      // backend call to get the OTP [TODO]
      // fetch call
      const otpWithDetails = await axios.post('http://10.0.2.2:5000/api/v1/users/sendOTP', {
        phone: newMobile,
      });

      console.log(otpWithDetails);
      if (otpWithDetails.data.status === 'success') {
        const { otp, hash } = otpWithDetails.data;
        setOTP(otp);
      }

    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {

    if (!!systemOTP) {
      navigation.navigate('MobileNumberVerifyScreen', { systemOTP })
    }
  }, [systemOTP]);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`Enter your\n mobile number`} </Text>
      <Text style={styles.subHeading}>
        We will text you a verification code. Message and data rates may apply
      </Text>
      <View style={styles.btnContainer}>
        <TextInput
          label='Mobile number'
          value={mobileNumber}
          onChangeText={validateMobileNumber}
          style={styles.textInput}
          keyboardType={'numeric'}
          mode='outlined'
          autoFocus={true}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.goBackBtnTxt}>Go back</Text>
        </TouchableOpacity>
        {/* validate input and if there is number proceed */}
        {mobileNumber.length === 10 && (
          <TouchableOpacity
            onPress={handleSendOTP}
            style={styles.button}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EnterMobileNumberScreen;

const { width } = Dimensions.get('screen');
const widthTextInput = width * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary.color,
  },
  subHeading: {
    fontSize: 15,
    textAlign: 'center',
    padding: 30,
    color: Colors.fontColor.color,
  },
  textInput: {
    width: widthTextInput,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary.color,
    marginTop: 10,
    borderRadius: 10,
  },
  btnContainer: {
    alignSelf: 'center',
    flexDirection: 'column',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  goBackBtnTxt: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
});
