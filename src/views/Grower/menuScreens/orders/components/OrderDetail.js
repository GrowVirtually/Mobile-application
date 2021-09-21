import React, {useState, useEffect, useContext} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
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
  id = "",
  paymentAmount = "",
  createdAt = "",
  date = "",
  growerId = "",
  price = "",
  isOrderCompleted = "",
  isConsumerCompleted = "",
  isGrowerAccepted = "",
  isGrowerCompleted = "",
  qrLink = "",
  quantity = "",
  updatedAt = "",
  consumerId = "",
  deliveryMethod = "",
  gigId = "",
  gigTitle = "",
  growerFname = "",
  growerLname = "",
  fname = "",
  lname = "",
}) => {
  const navigation = useNavigation();
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [consumerData, setConsumerData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleViewOrder = () => {
    navigation.navigate("OrderCompletion", {
      id,
      paymentAmount,
      createdAt,
      date,
      growerId,
      price,
      isOrderCompleted,
      isConsumerCompleted,
      isGrowerAccepted,
      isGrowerCompleted,
      qrLink,
      quantity,
      updatedAt,
      consumerId,
      deliveryMethod,
      gigId,
      gigTitle,
      growerFname,
      growerLname,
      consumerName,
    });
  };

  //want to fetch the data as soon as the component mounts, so calling getConsumerData function in useEffect hook.

  async function getConsumerData() {
    try {
      const response = await axios({
        method: "get",
        url: `${HOST_PORT}/api/v1/growers/consumers/${consumerId}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setConsumerData(response.data.data.consumer);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(async () => {
    setLoading(true);
    await getConsumerData();
  }, []);

  console.log("Consumer Data : ", consumerData);

  const consumerName = consumerData.fname + " " + consumerData.lname;

  return (
    <View style={styles.card}>
      <View style={styles.orderNoRow}>
        <Text style={styles.orderTxt}>Order ID: GR00</Text>
        <Text style={styles.orderTxt}>{id}</Text>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.dateTxt}>{createdAt}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon style={{marginRight: 5}} name="account" size={16} color="#555" />
          <Text style={styles.dateTxt}>{consumerName}</Text>
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

      <TouchableOpacity style={styles.viewOrder} onPress={() => handleViewOrder()}>
        <Text style={styles.viewOrderTxt}>View Order</Text>
      </TouchableOpacity>
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
  logo: {
    width: 66,
    height: 58,
  },
  viewOrder: {
    elevation: 8,

    backgroundColor: Colors.primary.color,
    marginTop: 8,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 5,
    // minHeight: 100,
  },
  viewOrderTxt: {
    color: "#ffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
