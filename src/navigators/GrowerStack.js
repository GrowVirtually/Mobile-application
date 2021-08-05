import React from "react";

import {createStackNavigator} from "@react-navigation/stack";


import {GrowerHomeScreen} from "../views/Grower/GrowerHomeScreen";

// Grower's Menu Screens
import Earnings from "../views/Grower/Earnings";
import FindConsumer from "../views/Grower/FindConsumer";
import MyGigs from "../views/Grower/MyGigs";
import NewGig from "../views/Grower/NewGig";
import Orders from "../views/Grower/Orders";
import Support from "../views/Grower/Support";



const Stack = createStackNavigator();

const GrowerStack = () => {
  // Consumer Screens which are not on drawer are here
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name={"GrowerHome"} component={GrowerHomeScreen} />
      <Stack.Screen name={"Earnings"} component={Earnings} />
      <Stack.Screen name={"FindConsumer"} component={FindConsumer} />
      <Stack.Screen name={"MyGigs"} component={MyGigs} />
      <Stack.Screen name={"NewGig"} component={NewGig} />
      <Stack.Screen name={"Orders"} component={Orders} />
      <Stack.Screen name={"Support"} component={Support} />
    </Stack.Navigator>
  );
};
export default GrowerStack;