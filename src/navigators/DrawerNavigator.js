/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/core";
import {Notifications} from "../views/Consumer/Notifications";
import {GrowerHomeScreen} from "../views/Grower/GrowerHomeScreen";
import {GrowerOther} from "../views/Grower/GrowerOther";
import ConsumerDrawer from "./ConsumerDrawer";
import GrowerDrawer from "./GrowerDrawer";
import ConsumerStack from "./ConsumerStack";
import ProfileScreen from "../views/ProfileScreen";
import {Map} from "../views/Map";
import * as Colors from "../styles/abstracts/colors";

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
      <Drawer.Screen name={"GrowerOther"} component={GrowerOther} />
    </Drawer.Navigator>
  );
}

export {ConsumerDrawerNavigator, GrowerDrawerNavigator};
