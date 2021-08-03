import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import NumericInput from "react-native-numeric-input";

const QtyPrice = ({priceTag, qty, handleQty}) => {

  return (
    <View>
      <View style={styles.qtyRow}>
        <Text style={{marginRight: 10}}>Quantity (KG):</Text>
        <NumericInput
          rounded
          onChange={value => handleQty(value)}
          value={qty}
          minValue={1}
          rightButtonBackgroundColor={Colors.secondary.color}
          leftButtonBackgroundColor={Colors.secondary.color}
          iconStyle={{color: "#FFF"}}
          borderColor={Colors.secondary.color}
          totalHeight={35}
          totalWidth={90}
        />
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
