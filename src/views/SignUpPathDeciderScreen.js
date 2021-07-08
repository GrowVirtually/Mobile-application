import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import userTypeReducer from '../reducers/userType';

import * as Base from '../styles/base/base';
import * as Typography from '../styles/base/typography';
import * as Colors from '../styles/abstracts/colors';
import * as Buttons from '../styles/components/buttons';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const SignUpPathDeciderScreen = ({ navigation }) => {

  const [userType, userTypeDispatch] = useReducer(userTypeReducer, 'consumer');

  const handlePath = (userType) => {
    userType === 'consumer' ?
      userTypeDispatch({ type: 'CONSUMER' })
      :
      userTypeDispatch({ type: 'GROWER' });
    navigation.navigate('EnterMobileNumberScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome to</Text>
        <Animatable.Image animation={'bounceIn'}
                          duration={1500}
                          source={require('../assets/logo.png')}
                          style={styles.logo}
                          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => handlePath('consumer')}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']}
                          style={[styles.button_round, {
                            marginBottom: 20,
                          }]}>
            <Text style={styles.button_txt}>Buy</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePath('grower')}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']}
                          style={styles.button_round}>
            <Text style={styles.button_txt}>Sell</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default SignUpPathDeciderScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: 'blue',
  },
  logo: {
    ...Base.logoLarge,
    // borderWidth: 1,
    borderColor: 'pink',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginBottom: 235,
    // borderWidth: 1,
    borderColor: 'red',
  },
  heading: {
    ...Typography.heading_main,
    // justifyContent: 'flex-start',
    // borderWidth: 1,
    borderColor: 'green',
  },
  buttons: {
    flex: 1,
    alignItems: 'flex-end',
    // borderWidth: 1,
    borderColor: 'red',
  },
  button_round: {
    ...Buttons.btn_round,
  },
  button_txt: {
    ...Typography.btn_round_text,
  },

});
