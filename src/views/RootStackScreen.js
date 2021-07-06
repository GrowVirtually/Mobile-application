import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Auth/SplashScreen'
import SignInScreen from './Auth/SignInScreen';
import SignUpScreen from './Auth/SignUpScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {ConsumerHomeScreen} from './Consumer/ConsumerHomeScreen';
import { GrowerHomeScreen } from './Grower/GrowerHomeScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode={'none'}>
    <RootStack.Screen name={'SplashScreen'} component={SplashScreen} />
    <RootStack.Screen name={'SignInScreen'} component={SignInScreen} />
    <RootStack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    <RootStack.Screen name={'HomeScreen'} component={HomeScreen} />
    <RootStack.Screen name={'Details'} component={DetailsScreen} />
    <RootStack.Screen name={'ConsumerHome'} component={ConsumerHomeScreen} />
    <RootStack.Screen name={'GrowerHome'} component={GrowerHomeScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
