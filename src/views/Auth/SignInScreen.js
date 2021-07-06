import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#009387'} barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name={'user-o'} color={'#05375a'} size={20} />
          <TextInput
            placeholder={'Your Email'}
            style={styles.textInput}
            autoCapitalize={'none'}
            onChangeText={val => textInputChange(val)}
          />
          {data.checkTextInputChange && (
            <Animatable.View animation={'bounceIn'}>
              <Feather name={'check-circle'} color={'green'} size={20} />
            </Animatable.View>
          )}
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name={'lock'} color={'#05375a'} size={20} />
          <TextInput
            placeholder={'Your Password'}
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize={'none'}
          />
          <TouchableOpacity onPress={updateSecureEntry}>
            {data.secureTextEntry ? (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            ) : (
              <Feather name={'eye-off'} color={'grey'} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <LinearGradient colors={["#08d4c4", "#01ab9d"]}
                          style={styles.signIn}>
            <Text style={[styles.textSign, {
              color: "#fff"
            }]}>Sign In</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}
                            style={[styles.signIn, {
                              borderColor: "#009387",
                              borderWidth: 1,
                              marginTop: 15
                            }]}>
            <Text style={[styles.textSign, {
              color: "#009387"
            }]}>Sign Up</Text>
          </TouchableOpacity>
        </View> */}
        <View style={newStyle.btnContainer}>
          <TouchableOpacity
            
            style={[newStyle.btn, newStyle.btnFocused]}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={newStyle.btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={newStyle.btn}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={newStyle.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const newStyle = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  btn: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnFocused: {
    backgroundColor: 'green',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
