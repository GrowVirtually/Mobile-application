import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AppHeader from "./Common/AppHeader";

const MyOrdersScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="My Orders" />
      <View>
        <Text>my orders</Text>
      </View>
    </>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
