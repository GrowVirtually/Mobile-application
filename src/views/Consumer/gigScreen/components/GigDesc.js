import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

const GigDesc = () => {
  return (
    <View>
      <View style={styles.detailRow}>
        <MaterialIcon name="information-outline" size={22} color={Colors.fontColor.color} />
        <View style={styles.sellerDetail}>
          <Text style={styles.detailTitle}>Descripton</Text>
          <Text style={styles.descripton}>
            Fresh yellow pumpkin harvested and available for sale. Can buy total lot or 5KG lot.
            Price can be slightly negotiable after confirmation. Call for more details.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GigDesc;

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
