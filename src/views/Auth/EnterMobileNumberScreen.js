import React from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';

const EnterMobileNumberScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    signIn: true,
    mobileNumber: '',
  });

  const validateMobileNumber = (number) => {
    // const val = number.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
    // // if (!number || number.match('/^\\d*(\\.\\d{0, 2})?$/')) {
    // //   alert(number);
    //   setData({
    //     ...data,
    //     mobileNumber: val,
    //   });
    // // }

    const regex = /^\d*(\.\d{0, 2})?$/;

    if ((!number || regex.test(number.toString())) && data.mobileNumber.length < 10) {
      setData({
        ...data,
        mobileNumber: number,
      });
    }

  };

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
        <Button title={'Next'} onPress={() => navigation.navigate('MobileNumberVerifyScreen')} />
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


