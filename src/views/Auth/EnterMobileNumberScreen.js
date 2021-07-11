import React from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  // TextInput,
  View,
} from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';
import * as Typography from '../../styles/base/typography';
import {TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import {TextInput} from 'react-native-paper';

const EnterMobileNumberScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    signIn: true,
    mobileNumber: '',
  });

  const validateMobileNumber = number => {
    // const val = number.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
    // // if (!number || number.match('/^\\d*(\\.\\d{0, 2})?$/')) {
    // //   alert(number);
    //   setData({
    //     ...data,
    //     mobileNumber: val,
    //   });
    // // }

    const regex = /^\d*(\.\d{0, 2})?$/;

    if (
      (!number || regex.test(number.toString())) &&
      data.mobileNumber.length < 10
    ) {
      setData({
        ...data,
        mobileNumber: number,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`Enter your\n mobile number`} </Text>
      <Text style={styles.subHeading}>
        We will text you a verification code. Message and data rates may apply
      </Text>
      <View style={styles.btnContainer}>
        {/* <TextInput
          style={styles.textInput}
          onChangeText={validateMobileNumber}
          value={data.mobileNumber}
          keyboardType={'numeric'}
          autoFocus={true}
        /> */}
        <TextInput
          label="Mobile number"
          value={data.mobileNumber}
          onChangeText={validateMobileNumber}
          style={styles.textInput}
          keyboardType={'numeric'}
          mode="outlined"
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
        {data.mobileNumber.length === 10 && (
          <TouchableOpacity
            onPress={() => navigation.navigate('MobileNumberVerifyScreen')}
            style={styles.button}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EnterMobileNumberScreen;

const {width} = Dimensions.get('screen');
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
    color:Colors.fontColor.color,
  },
  textInput: {
    width: widthTextInput,
    marginBottom:20,
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
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
  },
  goBackBtnTxt : {
    fontSize:18,
    color: 'blue',
    textDecorationLine: 'underline',  
    textAlign: 'center',
    marginBottom:20,
  }
});
