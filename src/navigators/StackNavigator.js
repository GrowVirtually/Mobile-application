import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import {ConsumerDrawerNavigator, GrowerDrawerNavigator} from "./DrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import {useStore} from "../context/StoreProvider";
import LocationSetter from "../views/LocationSetter";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  // This stack should contain only the starter stack for other nested navigators
  // No screens should be direct child of this stack
  const {globalState, globalDispatch} = useStore();
  const [myLocation, setMyLocation] = useState(null);

  let globalStateObj;
  let locationObj;
  useEffect(async () => {
    try {
      const globalStateStr = await AsyncStorage.getItem("globalState");
      // const locationStr = await AsyncStorage.getItem("mylocation");
      globalStateObj = JSON.parse(globalStateStr);
      // locationObj = JSON.parse(locationStr);
      // console.log("stack: ", globalStateStr);
      // console.log("mylocation ", locationObj);
      // if (locationObj != null || globalState.location != null) {
      //   setMyLocation(locationObj);
      // }
      globalDispatch({
        type: "SET_USER",
        usertype: globalStateObj.usertype,
        firstname: globalStateObj.firstname,
        lastname: globalStateObj.lastname,
        userEmail: globalStateObj.userEmail,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      {/* {myLocation === null && globalState.location === null && (
        <Stack.Screen name="LocationSetter" component={LocationSetter} />
      )} */}
      {globalState.usertype === "grower" ? (
        <Stack.Screen name="GrowerHome" component={GrowerDrawerNavigator} />
      ) : (
        <Stack.Screen name="ConsumerHome" component={ConsumerDrawerNavigator} />
      )}

      <Stack.Screen name="CommonHome" component={HomeScreen} />
      <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
