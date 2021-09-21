// src/views/Grower/NewGig.js

import React, {useEffect, useContext, useState} from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";

import axios from "axios";
import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";
import AuthContext from "../../../../context/auth-context";
import {HOST_PORT} from "@env";

import OrderList from "./components/OrderList";

function OrdersScreen({navigation}) {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //want to fetch the data as soon as the component mounts, so calling getGigs function in useEffect hook.
  useEffect(() => {
    async function getOrders() {
      //To make API call to get Orders
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/growers/orders/toDeliver`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setMyOrders(response.data.data.orders);
        console.log(response.data.data.orders);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    setLoading(true);
    getOrders();
  }, []);
  console.log("Orders Data : ", myOrders);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="My Orders" showBackButton={true} />

      <ScrollView>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <View>
            <OrderList myOrders={myOrders} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrdersScreen;
