import {useNavigation} from "@react-navigation/native";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";
import {WebView} from "react-native-webview";
import StripeCheckout from "react-native-stripe-checkout-webview";

const Payment = () => {
  const navigation = useNavigation();
  //  <AppHeader navigation={navigation} title="Payment" showBackButton={true} />

  return (
    <>
      <View>
        <AppHeader navigation={navigation} title="Payment" showBackButton={true} />
      </View>
      <StripeCheckout
        stripePublicKey="pk_test_51JMm8aC6jbszMiH2kyfC7NkvZZdF18vmFExsw4vtOBrS5xBVWKbEcFYuggt7bmIsHROzechpHypuBjuqlio3Foka00kokLDcDC"
        checkoutSessionInput={{
          sessionId: "cs_test_mK66sMhXoyNiST3rRdlDSNLH64esLttAjyhKe4VvdRAXGFuA5sYprmKj",
        }}
        onSuccess={({checkoutSessionId}) => {
          console.log(`Stripe checkout session succeeded. session id: ${checkoutSessionId}.`);
        }}
        onCancel={() => {
          console.log(`Stripe checkout session cancelled.`);
        }}
      />
      {/* <WebView source={{uri: "https://www.google.com"}} /> */}
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({});
