import React, {useReducer} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import userTypeReducer from '../../reducers/userType';

import * as Base from '../../styles/base/base';
import * as Typography from '../../styles/base/typography';
import * as Colors from '../../styles/abstracts/colors';
import * as Buttons from '../../styles/components/buttons';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const SignUpPathDeciderScreen = ({navigation}) => {
  const [userType, userTypeDispatch] = useReducer(userTypeReducer, 'consumer');

  const handlePath = userType => {
    userType === 'consumer'
      ? userTypeDispatch({type: 'CONSUMER'})
      : userTypeDispatch({type: 'GROWER'});
    navigation.navigate('EnterMobileNumberScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>W e l c o m e</Text>
        <Animatable.Image
          animation={'bounceIn'}
          duration={1500}
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => handlePath('consumer')}
          style={[styles.button_round, {backgroundColor:Colors.secondary.color}]}>
          <Text style={styles.button_txt}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePath('grower')}
          style={styles.button_round}>
          <Text style={styles.button_txt}>SELL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPathDeciderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  logo: {
    ...Base.logoLarge,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heading: {
    ...Typography.heading_main,
    color: Colors.primary.color,
    fontSize: 22,
    fontWeight: 'normal',
    borderColor: 'green',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
  },
  button_round: {
    // ...Buttons.btn_round,
    padding: 15,
    width: '100%',
    backgroundColor: Colors.primary.color,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  button_txt: {
    ...Typography.btn_round_text,
    color: '#fff',
    fontWeight: 'normal',
  },
});
