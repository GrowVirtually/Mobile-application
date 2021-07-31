import React from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import NumericInput from "react-native-numeric-input";

const QtyPrice = () => {
  return (
    <View>
      <View style={styles.qtyRow}>
        <Text style={{marginRight: 10}}>Quantity (KG):</Text>
        <NumericInput
          rounded
          onChange={value => console.log(value)}
          minValue={0}
          rightButtonBackgroundColor={Colors.secondary.color}
          leftButtonBackgroundColor={Colors.secondary.color}
          iconStyle={{color: "#FFF"}}
          borderColor={Colors.secondary.color}
          totalHeight={35}
          totalWidth={90}
        />
        <Text style={{marginLeft: 15}}>Price (Rs): </Text>
        <Text style={{fontWeight: "bold"}}>6799.00</Text>
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
