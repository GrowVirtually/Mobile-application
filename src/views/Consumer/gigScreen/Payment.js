import {useNavigation} from "@react-navigation/native";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <AppHeader navigation={navigation} title="Payment" showBackButton={true} />
      <Text>Hello payment</Text>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
