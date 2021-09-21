import React, {useState, useEffect, useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {List} from "react-native-paper";
import AppHeader from "../Common/AppHeader";
import Order from "../Common/Order";
import {HOST_PORT} from "@env";
import axios from "axios";
import AuthContext from "../../context/auth-context";

const MyOrdersScreen = ({navigation}) => {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [toDeliverOrders, setToDeliverOrders] = useState([]);
  const [completeOrders, setCompleteOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getToDeliverOrders();
      getCompletedOrders();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getToDeliverOrders();
    getCompletedOrders();
  }, []);

  const getToDeliverOrders = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${HOST_PORT}/api/v1/consumers/orders/toDeliver`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("orders", response.data.data);
      setToDeliverOrders(response.data.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const getCompletedOrders = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${HOST_PORT}/api/v1/consumers/orders/completed`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("orders", response.data.data);
      setCompleteOrders(response.data.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader navigation={navigation} title="My Orders" />
      <ScrollView>
        <List.AccordionGroup>
          <List.Accordion title={`To Deliver  (${toDeliverOrders.length})`} id="1">
            {toDeliverOrders.length === 0 ? (
              <Text style={styles.noDataTxt}>No orders to display</Text>
            ) : (
              toDeliverOrders.map((item, index) => (
                <Order
                  key={index}
                  orderId={item.id}
                  date={item.createdAt}
                  // grower="John Doe"
                  price={item.paymentAmount}
                  // isOrderCompleted={false}
                />
              ))
            )}
          </List.Accordion>
          <List.Accordion title={`Completed  (${completeOrders.length})`} id="2">
            {completeOrders.length === 0 ? (
              <Text style={styles.noDataTxt}>No orders to display</Text>
            ) : (
              completeOrders.map((item, index) => (
                <Order
                  key={index}
                  orderId={item.id}
                  date={item.createdAt}
                  // grower="John Doe"
                  price={item.paymentAmount}
                  // isOrderCompleted={false}
                />
              ))
            )}
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  noDataTxt: {
    padding: 20,
    paddingLeft: 40,
    color: "#999",
  },
});
