/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import { ConsumerHomeScreen } from "../views/Consumer/ConsumerHomeScreen";
import {GigScreen} from "../views/Consumer/GigScreen";

const Stack = createStackNavigator();

const ConsumerStack = () => {
    // Consumer Screens which are not on drawer are here
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"Gigs"} component={ConsumerHomeScreen} />
      <Stack.Screen name={"GigScreen"} component={GigScreen} />
    </Stack.Navigator>
  );
};
export default ConsumerStack;
