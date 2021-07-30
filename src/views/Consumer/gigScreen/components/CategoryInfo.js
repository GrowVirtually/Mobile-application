import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

const CategoryInfo = () => {
  return (
    <View>
      <View style={styles.detailRow}>
        <MaterialIcon name="tag-outline" size={22} color={Colors.fontColor.color} />
        <View style={styles.sellerDetail}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.detailTitle}>Category: </Text>
            <Text style={styles.descripton}>Organic</Text>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.detailTitle}>Type: </Text>
          <Text style={styles.descripton}>Vegetable</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryInfo;

const styles = StyleSheet.create({
  sellerDetail: {
    marginLeft: 20,
    paddingRight: 30,
    color: Colors.fontColor.color,
  },
  detailRow: {
    marginTop: 13,
    flexDirection: "row",
  },
  detailTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
