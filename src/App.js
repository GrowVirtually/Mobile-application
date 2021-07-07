/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen from './views/DetailsScreen';
import HomeScreen from './views/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTabScreen from './views/MainTabScreen';
import RootStackScreen from './views/RootStackScreen';
import { ActivityIndicator, View } from 'react-native';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Button,
//   useColorScheme,
//   View
// } from "react-native";


const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // const authContext = React.useMemo();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStackScreen />
      {/*<Drawer.Navigator initialRouteName="Home">*/}
      {/*  <Drawer.Screen name="Home" component={MainTabScreen} />*/}
      {/*  /!*<Drawer.Screen name="Details" component={DetailsStackScreen} />*!/*/}
      {/*</Drawer.Navigator>*/}
    </NavigationContainer>
  );

};

export default App;
