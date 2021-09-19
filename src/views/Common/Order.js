import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Colors from "../../styles/abstracts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Order = ({orderId, date, grower, price, isOrderCompleted}) => {
  return (
    <View style={styles.card}>
      <View style={styles.orderNoRow}>
        <Text style={styles.orderTxt}>Order # </Text>
        <Text style={styles.orderTxt}>{orderId}</Text>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.dateTxt}>{date}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon style={{marginRight: 5}} name="account" size={16} color="#555" />
          <Text style={styles.dateTxt}>{grower}</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceTxt}>Rs. {price}</Text>
      </View>
      <View style={styles.statusRow}>
        {isOrderCompleted ? (
          <>
            <Icon
              style={{marginRight: 5}}
              name="information"
              size={18}
              color={Colors.secondary.color}
            />
            <Text style={styles.statusTxt}>Order completed </Text>
          </>
        ) : (
          <>
            <Icon
              style={{marginRight: 5}}
              name="information"
              size={18}
              color={Colors.errorColor.color}
            />
            <Text style={[styles.statusTxt, {color: Colors.errorColor.color}]}>Pending</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  orderNoRow: {
    flexDirection: "row",
  },
  orderTxt: {
    color: Colors.fontColor.color,
    fontSize: 15,
    fontWeight: "bold",
  },
  dateRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTxt: {
    color: "#555",
  },
  priceRow: {
    marginTop: 7,
  },
  priceTxt: {
    color: Colors.primary.color,
    fontSize: 18,
    fontWeight: "bold",
  },
  statusRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  statusTxt: {
    fontWeight: "bold",
    color: Colors.secondary.color,
  },
});
