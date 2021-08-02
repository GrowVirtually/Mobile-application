/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/core";
import {Notifications} from "../views/Consumer/Notifications";
import {GrowerHomeScreen} from "../views/Grower/GrowerHomeScreen";

import ConsumerDrawer from "./ConsumerDrawer";
import GrowerDrawer from "./GrowerDrawer";
import ConsumerStack from "./ConsumerStack";
import ProfileScreen from "../views/ProfileScreen";
import {Map} from "../views/Map";
import * as Colors from "../styles/abstracts/colors";

// Grower's Menu Screens
import Earnings from "../views/Grower/Earnings";
import FindConsumer from "../views/Grower/FindConsumer";
import MyGigs from "../views/Grower/MyGigs";
import NewGig from "../views/Grower/NewGig";
import Orders from "../views/Grower/Orders";
import Support from "../views/Grower/Support";

const Drawer = createDrawerNavigator();

function ConsumerDrawerNavigator() {
  const navigation = useNavigation();

  return (
    // Only the screen that should be displayed in drawer is here
    <Drawer.Navigator
      drawerContent={ConsumerDrawer}
      navigation={navigation}
      drawerStyle={{backgroundColor: Colors.primary.color}}>
      {/* ConsumerStack contains all other consumer related screens not on drawer */}
      <Drawer.Screen name={"ConsumerHome"} component={ConsumerStack} />
      <Drawer.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Drawer.Screen name={"Map"} component={Map} />

      <Drawer.Screen name={"Notifications"} component={Notifications} />
    </Drawer.Navigator>
  );
}

function GrowerDrawerNavigator() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={GrowerDrawer}
      navigation={navigation}
      drawerStyle={{backgroundColor: "red"}}>
      <Drawer.Screen name={"GrowerHome"} component={GrowerHomeScreen} />
      <Drawer.Screen name={"Earnings"} component={Earnings} />
      <Drawer.Screen name={"FindConsumer"} component={FindConsumer} />
      <Drawer.Screen name={"MyGigs"} component={MyGigs} />
      <Drawer.Screen name={"NewGig"} component={NewGig} />
      <Drawer.Screen name={"Orders"} component={Orders} />
      <Drawer.Screen name={"Support"} component={Support} />

      <Drawer.Screen name={"Notifications"} component={Notifications} />
      <Drawer.Screen name={"ProfileScreen"} component={ProfileScreen} />
      
    
    </Drawer.Navigator>
  );
}

export {ConsumerDrawerNavigator, GrowerDrawerNavigator};
