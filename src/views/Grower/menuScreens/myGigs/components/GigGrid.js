import React from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import * as Colors from "../../../../../styles/abstracts/colors";
import {GrowerGig} from "./GrowerGig";
import {ActivityIndicator, Button} from "react-native-paper";

const GigGrid = ({myGigs}) => {
  return (
    <View style={styles.grid}>
      {myGigs.map((myGigs, index) => (
        <GrowerGig direction="grid" {...myGigs} key={index} />
      ))}
    </View>
  );
};

export default GigGrid;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 130,
    backgroundColor: "#eee",
  },
  gigRowTitle: {
    padding: 10,
    paddingTop: 20,
    fontSize: 18,
    color: Colors.primary.color,
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
  loading: {
    height: 133,
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "red",
  },
  btns: {
    marginTop: 10,
    flexDirection: "row",
  },
});
