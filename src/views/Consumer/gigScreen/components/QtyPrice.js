import React from "react";
import {StyleSheet, Text, View} from "react-native";

import NumInput from "./NumInput";

const QtyPrice = ({priceTag, qty, handleQty}) => {
  return (
    <View>
      <View style={styles.qtyRow}>
        <Text style={{marginRight: 3}}>Quantity (KG):</Text>
        <NumInput val={qty} setVal={handleQty} />
        <Text style={{marginLeft: 15}}>Price (Rs): </Text>
        <Text style={{fontWeight: "bold"}}>{(priceTag * qty).toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default QtyPrice;

const styles = StyleSheet.create({
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});
