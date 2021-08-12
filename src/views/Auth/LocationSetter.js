import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from "react-native";
import {useStore} from "../../context/StoreProvider";

const LocationSetter = () => {
  const navigation = useNavigation();
  const {globalDispatch} = useStore();

  const handler = () => {
    const locationData = {lat: 3.333, long: 444.444};
    globalDispatch({type: "SET_USER_LOCATION", userLocation: locationData});
    navigation.navigate("MainStackNavigator");
  };

  return (
    <View>
      <Text>Location setter</Text>
      <Button title="set" onPress={() => handler()} />
    </View>
  );
};

export default LocationSetter;
