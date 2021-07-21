import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignUpPathDeciderScreen from '../views/Auth/SignUpPathDeciderScreen';
import EnterMobileNumberScreen from '../views/Auth/EnterMobileNumberScreen';
import LoginScreen from '../views/Auth/LoginScreen';
import SignupScreen1 from '../views/Auth/SignupScreen1';
import MobileNumberVerifyScreen from '../views/Auth/MobileNumberVerifyScreen';
import HomeScreen from '../views/HomeScreen';
import SignupScreen2 from '../views/Auth/SignupScreen2';
import MainStackNavigator from './StackNavigator';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({navigation}) => (
  <AuthStack.Navigator headerMode={'none'}>
    <AuthStack.Screen
      name={'SignUpPathDeciderScreen'}
      component={SignUpPathDeciderScreen}
    />
    <AuthStack.Screen
      name={'EnterMobileNumberScreen'}
      component={EnterMobileNumberScreen}
    />
    <AuthStack.Screen
      name={'MobileNumberVerifyScreen'}
      component={MobileNumberVerifyScreen}
    />
    <AuthStack.Screen name={'LoginScreen'} component={LoginScreen} />
    <AuthStack.Screen name={'SignupScreen1'} component={SignupScreen1} />
    <AuthStack.Screen name={'SignupScreen2'} component={SignupScreen2} />
    {/*<AuthStack.Screen name={'HomeScreen'} component={HomeScreen} />*/}
    <AuthStack.Screen
      name={'MainStackNavigator'}
      component={MainStackNavigator}
    />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
