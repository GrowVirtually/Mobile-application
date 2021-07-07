import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../views/Auth/SplashScreen';
import SignInScreen from '../views/Auth/SignInScreen';
import SignUpScreen from '../views/Auth/SignUpScreen';
import HomeScreen from '../views/HomeScreen';
import {ConsumerDrawerNavigator, GrowerDrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />

      <Stack.Screen name={'CommonHome'} component={HomeScreen} />

      <Stack.Screen name={'ConsumerHome'} component={ConsumerDrawerNavigator} />
      <Stack.Screen name={'GrowerHome'} component={GrowerDrawerNavigator} />
    </Stack.Navigator>
  );
};

// const ConsumerTabs = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name={'Details'} component={DetailsScreen} />
//       <Stack.Screen name={'ConsumerHome'} component={ConsumerHomeScreen} />
//       <Stack.Screen name={'Notifications'} component={Notifications} />
//     </Stack.Navigator>
//   );
// };

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export {MainStackNavigator};
