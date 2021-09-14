// src/views/Grower/NewGig.js

import React from "react";
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, Image} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

function FindConsumer({navigation}) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 6.849566346522013,
        longitude: 79.90739464759828,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: 6.849566346522013,
          longitude: 79.90739464759828,
        }}
        title="Test Tile Location"
        description="Test Description">
        <Image
          source={require("../../../../assets/placeholder.png")}
          style={{width: 40, height: 40}}
        />
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Amarabandu</Text>
              <Text>A short Description</Text>
              <Image style={styles.image} source={require("../../../../assets/pinnew.png")} />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },

  //Callout Bubble
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 30,
    width: 200,
  },
  //Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    marginBottom: -15,
  },
  //Character Name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  //Character Image
  image: {
    width: 120,
    height: 80,
  },
});

export default FindConsumer;
