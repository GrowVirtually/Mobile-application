/* eslint-disable react-native/no-unused-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

export const ConsumerMap = () => {
  const delta = {latitudeDelta: 0.01, longitudeDelta: 0.01};
  const navigation = useNavigation();
  const route = useRoute();

  const {marker, myLocation} = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <MaterialIcon style={styles.icon} name="arrow-left" color="#fff" size={20} />
      </TouchableOpacity>

      <MapView style={styles.map} initialRegion={{...marker, ...delta}}>
        <Marker coordinate={marker} />
        <Marker coordinate={myLocation} />
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
});
