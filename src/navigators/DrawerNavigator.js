/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/core";
import {Notifications} from "../views/Consumer/Notifications";

import ConsumerDrawer from "./ConsumerDrawer";
import GrowerDrawer from "./GrowerDrawer";
import ConsumerStack from "./ConsumerStack";
import GrowerStack from "./GrowerStack";
import ProfileScreen from "../views/ProfileScreen";
import LocationUpdater from "../views/LocationUpdater";
import * as Colors from "../styles/abstracts/colors";
import UpdateProfileScreen from "../views/UpdateProfileScreen";
import MyOrdersScreen from "../views/Consumer/MyOrdersScreen";

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
      <Drawer.Screen name={"Notifications"} component={Notifications} />
      <Drawer.Screen name={"LocationUpdater"} component={LocationUpdater} />
      <Drawer.Screen name={"UpdateProfile"} component={UpdateProfileScreen} />
      <Drawer.Screen name={"MyOrders"} component={MyOrdersScreen} />
    </Drawer.Navigator>
  );
}

function GrowerDrawerNavigator() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={GrowerDrawer}
      navigation={navigation}
      drawerStyle={{backgroundColor: Colors.primary.color}}>
      <Drawer.Screen name={"GrowerStack"} component={GrowerStack} />
      <Drawer.Screen name={"Notifications"} component={Notifications} />
      <Drawer.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Drawer.Screen name={"LocationUpdater"} component={LocationUpdater} />
      <Drawer.Screen name={"UpdateProfile"} component={UpdateProfileScreen} />
    </Drawer.Navigator>
  );
}

export {ConsumerDrawerNavigator, GrowerDrawerNavigator};
