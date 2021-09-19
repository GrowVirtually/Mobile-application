import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {List} from "react-native-paper";
import AppHeader from "../Common/AppHeader";
import Order from "../Common/Order";

const MyOrdersScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="My Orders" />
      <ScrollView>
        {/* <View style={styles.container}>
          <Order
            orderId="4442"
            date="20-Jan-2021"
            grower="John Doe"
            price="4432.13"
            isOrderCompleted={true}
          />
        </View> */}
        <List.AccordionGroup>
          <List.Accordion title="To be delivered" id="1">
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
          </List.Accordion>
          <List.Accordion title="Completed" id="2">
            <Order
              orderId="2442"
              date="20-Jan-2021"
              grower="John Doe"
              price="832.13"
              isOrderCompleted={false}
            />
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
});
