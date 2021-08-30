/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {GigScreen} from "../views/Consumer/gigScreen/GigScreen";
import {ConsumerHomeScreen} from "../views/Consumer/homeScreen/ConsumerHomeScreen";
import {ConsumerMap} from "../views/Consumer/gigScreen/components/ConsumerMap";
import Payment from "../views/Consumer/gigScreen/Payment";
const Stack = createStackNavigator();

const ConsumerStack = () => {
  // Consumer Screens which are not on drawer are here
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"Gigs"} component={ConsumerHomeScreen} />
      <Stack.Screen name={"GigScreen"} component={GigScreen} />
      <Stack.Screen name={"ConsumerMap"} component={ConsumerMap} />
      <Stack.Screen name={"Payment"} component={Payment} />

    </Stack.Navigator>
  );
};
export default ConsumerStack;
