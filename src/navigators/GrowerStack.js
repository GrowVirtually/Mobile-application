import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {GrowerHomeScreen} from "../views/Grower/homeScreen/GrowerHomeScreen";

// Grower's Menu Screens
import Earnings from "../views/Grower/menuScreens/earnings/EarningsScreen";
import FindConsumer from "../views/Grower/menuScreens/findConsumer/FindConsumerScreen";
import MyGigsScreen from "../views/Grower/menuScreens/myGigs/MyGigsScreen";
import UpdateImage from "../views/Grower/menuScreens/myGigs/UpdateImage";

import NewGig from "../views/Grower/menuScreens/newGig/NewGigScreen01";
import GigScreen2 from "../views/Grower/menuScreens/newGig/GigScreen2";
import GigScreen3 from "../views/Grower/menuScreens/newGig/GigScreen3";
import GigScreen4 from "../views/Grower/menuScreens/newGig/GigScreen4";
import GigScreen5 from "../views/Grower/menuScreens/newGig/GigScreen5";
import SuccessGigScreen from "../views/Grower/menuScreens/newGig/SuccessGigScreen";
import GigScreenImage from "../views/Grower/menuScreens/newGig/GigScreenImage";

import Orders from "../views/Grower/menuScreens/orders/OrdersScreen";
import OrderCompletion from "../views/Grower/menuScreens/orders/OrderCompletion";

import Support from "../views/Grower/menuScreens/support/SupportScreen";

const Stack = createStackNavigator();

const GrowerStack = () => {
  // Consumer Screens which are not on drawer are here
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"GrowerHome"} component={GrowerHomeScreen} />
      <Stack.Screen name={"Earnings"} component={Earnings} />
      <Stack.Screen name={"FindConsumer"} component={FindConsumer} />
      <Stack.Screen name={"MyGigsScreen"} component={MyGigsScreen} />
      <Stack.Screen name={"UpdateImage"} component={UpdateImage} />
      <Stack.Screen name={"NewGig"} component={NewGig} />
      <Stack.Screen name={"GigScreen2"} component={GigScreen2} />
      <Stack.Screen name={"GigScreen3"} component={GigScreen3} />
      <Stack.Screen name={"GigScreen4"} component={GigScreen4} />
      <Stack.Screen name={"GigScreen5"} component={GigScreen5} />
      <Stack.Screen name={"SuccessGigScreen"} component={SuccessGigScreen} />
      <Stack.Screen name={"GigScreenImage"} component={GigScreenImage} />
      <Stack.Screen name={"Orders"} component={Orders} />
      <Stack.Screen name={"OrderCompletion"} component={OrderCompletion} />
      <Stack.Screen name={"Support"} component={Support} />
    </Stack.Navigator>
  );
};
export default GrowerStack;
