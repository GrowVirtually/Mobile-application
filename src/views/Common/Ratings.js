import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../styles/abstracts/colors";

const Ratings = ({val}) => {
  if (val < 0 || val > 5) {
    return <Text>Error</Text>;
  }

  let stars = [];
  for (let i = 0; i < val; ++i) {
    stars.push(1);
  }
  for (let i = val; i < 5; ++i) {
    stars.push(0);
  }

  return (
    <View style={{flexDirection: "row"}}>
      {stars.map(val =>
        val === 1 ? (
          <MaterialIcon name="star" size={18} color={Colors.secondary.color} />
        ) : (
          <MaterialIcon name="star-outline" size={18} color={Colors.secondary.color} />
        ),
      )}
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({});
