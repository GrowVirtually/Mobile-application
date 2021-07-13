import React, {useState} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';
import {TextInput} from 'react-native-paper';

export const SignupScreen1 = ({navigation}) => {
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
    <View style={styles.container}>
      {/* <Image
        animation={'bounceIn'}
        duration={1500}
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode={'stretch'}
      /> */}
      <Text style={styles.heading}>Tell us about you</Text>
      <View>
        {/* <TextInput
          style={styles.textInput}
          value={firstName}
          onChangeText={name => validateName(name)}
        /> */}

        <TextInput
          label="First name"
          value={firstName}
          onChangeText={name => validateName(name)}
          style={styles.textInput}
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

        {/* <Text>Please enter your last name</Text> */}
        {/* <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={name => validateName(name, false)}
        /> */}

        <TextInput
          label="Last name"
          value={lastName}
          onChangeText={name => validateName(name, false)}
          style={styles.textInput}
          mode="outlined"
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />

        {/* <Text>Enter your email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={email => validateEmail(email)}
        /> */}
        <TextInput
          label="Email"
          onChangeText={email => validateEmail(email)}
          style={styles.textInput}
          mode="outlined"
          error={validationErrors.includes('email') && true}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />

        {validationErrors.includes('email') && (
          <Text style={styles.helperText}>Wrong email</Text>
        )}
      </View>
      {!!firstName && !!lastName && !!email && !validationErrors.length && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignupScreen2')}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpPathDeciderScreen')}>
        <Text style={styles.linkText}>Change of mind, buy or sell ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen1;

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
    marginTop: 50,
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
    fontSize:12,
    textAlign:'center',
    color:Colors.errorColor.color,
    marginTop:10
  }
});
