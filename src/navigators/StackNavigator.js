import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import {ConsumerDrawerNavigator, GrowerDrawerNavigator} from "./DrawerNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import {useStore} from "../context/StoreProvider";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  // This stack should contain only the starter stack for other nested navigators
  // No screens should be direct child of this stack
  const {globalState, globalDispatch} = useStore();
  const [myLocation, setMyLocation] = useState(null);

  let globalStateObj;
  useEffect(async () => {
    try {
      const globalStateStr = await AsyncStorage.getItem("globalState");
      globalStateObj = JSON.parse(globalStateStr);

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
