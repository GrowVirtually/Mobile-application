import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import {useStore} from "../context/StoreProvider";
import * as Colors from "../styles/abstracts/colors";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LocationSetter = () => {
  const navigation = useNavigation();
  const {globalDispatch} = useStore();
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getLocation = () => {
    alert("Your location has been set");
    globalDispatch({type: "SET_USER_LOCATION", userLocation: location});
    saveData();
  };

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(location);
      await AsyncStorage.setItem("mylocation", jsonValue);
    } catch (e) {
      console.error(e);
    }
    console.log("Done saved.");
    navigation.navigate("MainStackNavigator");
  };

  const handleOnPress = e => {
    setLocation(e.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => getLocation()} style={styles.backBtn}>
        <MaterialIcon style={styles.icon} name="map-marker-check" color="#fff" size={28} />
      </TouchableOpacity>
      <View style={styles.label}>
        <Text style={{color: "#DDD"}}>Tap on your location and press confirm</Text>
      </View>

      <MapView
        style={styles.map}
        showsUserLocation={true}
        onPress={e => handleOnPress(e)}
        initialRegion={location}>
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
};

export default LocationSetter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 0,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
  },
  backBtn: {
    position: "absolute",
    zIndex: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 2,
    backgroundColor: Colors.primary.color,
    bottom: 20,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "relative",
  },
  label: {
    position: "absolute",
    padding: 5,
    zIndex: 5,
    borderRadius: 3,
    elevation: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
