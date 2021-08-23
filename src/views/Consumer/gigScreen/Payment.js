import {useNavigation} from "@react-navigation/native";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";
import {WebView} from "react-native-webview";

const Payment = () => {
  const navigation = useNavigation();
  //  <AppHeader navigation={navigation} title="Payment" showBackButton={true} />

  return (
    <>
      <View>
        <AppHeader navigation={navigation} title="Payment" showBackButton={true} />
      </View>
      <WebView source={{uri: "https://www.google.com"}} />
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({});
