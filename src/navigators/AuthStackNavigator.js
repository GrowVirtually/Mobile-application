import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import SignUpPathDeciderScreen from "../views/Auth/SignUpPathDeciderScreen";
import EnterMobileNumberScreen from "../views/Auth/EnterMobileNumberScreen";
import PasswordLoginScreen from "../views/Auth/PasswordLoginScreen";
import ForgotPasswordScreen from "../views/Auth/ForgotPasswordScreen";
import SignupScreen1 from "../views/Auth/SignupScreen1";
import SignupScreen2 from "../views/Auth/SignupScreen2";
import MobileNumberVerifyScreen from "../views/Auth/MobileNumberVerifyScreen";
import MainStackNavigator from "./StackNavigator";
import PasswordResetVerifyScreen from "../views/Auth/PasswordResetVerifyScreen";
import PasswordResetScreen from "../views/Auth/PasswordResetScreen";
import LocationSetter from "../views/Auth/LocationSetter";

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({navigation}) => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignUpPathDeciderScreen" component={SignUpPathDeciderScreen} />
    <AuthStack.Screen name="EnterMobileNumberScreen" component={EnterMobileNumberScreen} />
    <AuthStack.Screen name="MobileNumberVerifyScreen" component={MobileNumberVerifyScreen} />
    <AuthStack.Screen name="PasswordLoginScreen" component={PasswordLoginScreen} />
    <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <AuthStack.Screen name="PasswordResetScreen" component={PasswordResetScreen} />
    <AuthStack.Screen name="PasswordResetVerifyScreen" component={PasswordResetVerifyScreen} />
    <AuthStack.Screen name="SignupScreen1" component={SignupScreen1} />
    <AuthStack.Screen name="SignupScreen2" component={SignupScreen2} />
    <AuthStack.Screen name="MainStackNavigator" component={MainStackNavigator} />
    <AuthStack.Screen name="LocationSetter" component={LocationSetter} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
