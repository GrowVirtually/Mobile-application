import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";
import Ratings from "../../../Common/Ratings";

const SellerInfo = () => {
  return (
    <View>
      <View style={styles.ratingRow}>
        <View style={{flexDirection: "row"}}>
          <MaterialIcon name="storefront-outline" size={22} color={Colors.fontColor.color} />
          <View style={styles.sellerDetail}>
            <Text>For sale by N. Sumana</Text>
            <View style={styles.verfiedSeller}>
              <MaterialIcon name="star-circle" size={18} color={Colors.secondary.color} />
              <Text style={styles.verfiedSellerTxt}>GroVi verified seller</Text>
            </View>
          </View>
        </View>
        <View style={styles.ratings}>
          <Ratings val={3} />
        </View>
      </View>
    </View>
  );
};

export default SellerInfo;

const styles = StyleSheet.create({
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verfiedSeller: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  verfiedSellerTxt: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: "bold",
    color: Colors.fontColor.color,
  },
  sellerDetail: {
    marginLeft: 20,
    paddingRight: 30,
    color: Colors.fontColor.color,
  },
});
