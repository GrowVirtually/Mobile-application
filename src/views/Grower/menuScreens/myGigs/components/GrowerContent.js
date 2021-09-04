/* eslint-disable arrow-body-style */
import React from "react";
import {View, StyleSheet} from "react-native";
import {GrowerGigs} from "./GrowerGigs";

export const GrowerContent = () => {
  return (
    <View style={style.container}>
      <GrowerGigs />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
