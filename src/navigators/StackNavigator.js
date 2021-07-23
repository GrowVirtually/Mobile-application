import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import ProfileScreen from '../views/ProfileScreen';
import {
  ConsumerDrawerNavigator,
  GrowerDrawerNavigator,
} from './DrawerNavigator';
import AuthStackNavigator from "./AuthStackNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'CommonHome'} component={HomeScreen} />
      <Stack.Screen name={'ConsumerHome'} component={ConsumerDrawerNavigator} />
      <Stack.Screen name={'GrowerHome'} component={GrowerDrawerNavigator} />
      <Stack.Screen name={'AddGig'} component={GrowerDrawerNavigator} />
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'AuthStackNavigator'} component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export default MainStackNavigator;
