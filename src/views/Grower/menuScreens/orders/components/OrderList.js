import React from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import * as Colors from "../../../../../styles/abstracts/colors";
import {OrderDetail} from "./OrderDetail";

const OrderList = ({myOrders}) => {
  return (
    <View style={styles.grid}>
      {myOrders.map((myOrders, index) => (
        <OrderDetail direction="grid" {...myOrders} key={index} />
      ))}
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
