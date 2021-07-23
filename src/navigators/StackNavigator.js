/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import ProfileScreen from "../views/ProfileScreen";
import {ConsumerDrawerNavigator, GrowerDrawerNavigator} from "./DrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  // This stack should contain only the starter stack for other nested navigators
  // No screens should be direct child of this stack
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"CommonHome"} component={HomeScreen} />
      <Stack.Screen name={"AuthStackNavigator"} component={AuthStackNavigator} />
      <Stack.Screen name={"ConsumerHome"} component={ConsumerDrawerNavigator} />
      <Stack.Screen name={"GrowerHome"} component={GrowerDrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
