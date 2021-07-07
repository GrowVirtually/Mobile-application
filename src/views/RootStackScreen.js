import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import SignUpPathDeciderScreen from './SignUpPathDeciderScreen';
import EnterMobileNumberScreen from './EnterMobileNumberScreen';
import LoginScreen from './LoginScreen';
import SignupScreen1 from './SignupScreen1';
import MobileNumberVerifyScreen from './MobileNumberVerifyScreen';
import HomeScreen from './HomeScreen';
import SignupScreen2 from './SignupScreen2';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode={"none"}>
    <RootStack.Screen name={"SignUpPathDeciderScreen"} component={SignUpPathDeciderScreen} />
    <RootStack.Screen name={"EnterMobileNumberScreen"} component={EnterMobileNumberScreen} />
    <RootStack.Screen name={"MobileNumberVerifyScreen"} component={MobileNumberVerifyScreen} />
    <RootStack.Screen name={"LoginScreen"} component={LoginScreen} />
    <RootStack.Screen name={"SignupScreen1"} component={SignupScreen1} />
    <RootStack.Screen name={"SignupScreen2"} component={SignupScreen2} />
    <RootStack.Screen name={"HomeScreen"} component={HomeScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
