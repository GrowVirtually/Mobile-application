import React from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Colors from "../../styles/abstracts/colors";

const HorizontalRule = () => {
  return <View style={styles.hr} />;
};

export default HorizontalRule;

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: Colors.tertiary.color,
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});
