/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import ProfileScreen from "../views/ProfileScreen";
import {ConsumerDrawerNavigator, GrowerDrawerNavigator} from "./DrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import {GigScreen} from "../views/Consumer/GigScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={"none"}>
      {/* COMMON */}
      <Stack.Screen name={"CommonHome"} component={HomeScreen} />
      <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Stack.Screen name={"AuthStackNavigator"} component={AuthStackNavigator} />

      {/* CONSUMER ONLY */}
      <Stack.Screen name={"ConsumerHome"} component={ConsumerDrawerNavigator} />
      <Stack.Screen name={"GigScreen"} component={GigScreen} />

      {/* GROWER ONLY */}
      <Stack.Screen name={"GrowerHome"} component={GrowerDrawerNavigator} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

export default MainStackNavigator;
