/* eslint-disable react-native/no-unused-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

export const ConsumerMap = () => {
  const navigation = useNavigation();

  const [region, setRegion] = useState({
    latitude: 6.911650087805625,
    longitude: 79.8589850944203,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <MaterialIcon style={styles.icon} name="arrow-left" color="#fff" size={20} />
      </TouchableOpacity>

      <MapView style={styles.map} initialRegion={region}>
        <Marker coordinate={region} title="Colombo" description="ddd" />
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
