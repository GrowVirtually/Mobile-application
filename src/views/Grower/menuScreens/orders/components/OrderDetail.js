import React, {useState, useEffect, useContext} from "react";
import {Text, View, StyleSheet} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";
import * as Colors from "../../../../../styles/abstracts/colors";
import {useNavigation} from "@react-navigation/core";
import {Dimensions} from "react-native";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native-gesture-handler";
import axios from "axios";
import AuthContext from "../../../../../context/auth-context";

import {HOST_PORT} from "@env";

const {width} = Dimensions.get("screen");

export const OrderDetail = ({
  id,
  paymentAmount,
  createdAt,
  date,
  grower,
  price,
  isOrderCompleted,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.orderNoRow}>
        <Text style={styles.orderTxt}>Order # </Text>
        <Text style={styles.orderTxt}>{id}</Text>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.dateTxt}>{createdAt}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon style={{marginRight: 5}} name="account" size={16} color="#555" />
          <Text style={styles.dateTxt}>{grower}</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceTxt}>Rs. {paymentAmount}</Text>
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

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
