import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import AppHeader from "./Common/AppHeader";
import Order from "./Common/Order";

const MyOrdersScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="My Orders" />
      <ScrollView>
        <View style={styles.container}>
          <Order
            orderId="4442"
            date="20-Jan-2021"
            grower="John Doe"
            price="4432.13"
            isOrderCompleted={true}
          />
          <Order
            orderId="2442"
            date="20-Jan-2021"
            grower="John Doe"
            price="832.13"
            isOrderCompleted={false}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
