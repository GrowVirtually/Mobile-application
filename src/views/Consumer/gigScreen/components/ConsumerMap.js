/* eslint-disable react-native/no-unused-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

export const ConsumerMap = () => {
  const GOOGLE_MAPS_APIKEY = "AIzaSyB-pBePstD2POGVXI-TJG-pzh64OIvJo9w";
  const delta = {latitudeDelta: 0.01, longitudeDelta: 0.01};
  const navigation = useNavigation();
  const route = useRoute();

  const {marker, myLocation, routeData} = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <MaterialIcon style={styles.icon} name="arrow-left" color="#fff" size={20} />
      </TouchableOpacity>

      <View style={styles.routeInfo}>
        <Text style={styles.distance}>{routeData.distance.text} </Text>
        <Text style={styles.duration}>{routeData.duration.text} </Text>
      </View>

      <View style={styles.info}>
        <View style={styles.youPin}>
          <Text>Seller</Text>
        </View>
        <View style={styles.sellerPin}>
          <Text>You</Text>
        </View>
      </View>

      <MapView style={styles.map} initialRegion={{...marker, ...delta}}>
        <MapViewDirections
          origin={myLocation}
          destination={marker}
          apikey={GOOGLE_MAPS_APIKEY} // insert your API Key here
          strokeWidth={4}
          strokeColor={Colors.primary.color}
        />
        <Marker pinColor="tomato" coordinate={marker} />
        <Marker pinColor="gold" coordinate={myLocation} />
      </MapView>
    </View>
  );
};
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
  info: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 6,
  },
  youPin: {
    backgroundColor: "tomato",
    padding: 5,
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  sellerPin: {
    backgroundColor: "gold",
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  routeInfo: {
    bottom: 20,
    left: 100,
    zIndex: 8,
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    elevation: 2,
    borderRadius: 5,
  },
  distance: {
    color: Colors.primary.color,
    fontWeight: "bold",
    fontSize: 16,
  },
  duration: {
    color: Colors.secondary.color,
    fontWeight: "bold",
    fontSize: 16,
  },
});
