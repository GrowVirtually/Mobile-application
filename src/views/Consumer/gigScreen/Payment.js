import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState, useContext} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";
import {WebView} from "react-native-webview";
import StripeCheckout from "react-native-stripe-checkout-webview";
import {HOST_PORT} from "@env";
import axios from "axios";
import AuthContext from "../../../context/auth-context";

const Payment = ({route}) => {
  const navigation = useNavigation();
  const [session, setSession] = useState({});
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;
  const [loading, setLoading] = useState(false);
  const {gigID, qty} = route.params;

  useEffect(() => {
    // console.log("prev", unitPrice, qty);
    const getSessionObj = async () => {
      try {
        const config = {
          method: "get",
          url: `${HOST_PORT}/api/v1/bookings/checkout-session/${gigID}/${qty}`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
        const response = await axios(config);
        console.log("log", response.data.session.id);
        setSession(response.data.session);
      } catch (error) {
        console.error(error);
      }
    };
    getSessionObj();
  }, []);

  return (
    <>
      <View>
        <AppHeader navigation={navigation} title="Payment" showBackButton={true} />
      </View>
      <StripeCheckout
        stripePublicKey="pk_test_51JMm8aC6jbszMiH2kyfC7NkvZZdF18vmFExsw4vtOBrS5xBVWKbEcFYuggt7bmIsHROzechpHypuBjuqlio3Foka00kokLDcDC"
        checkoutSessionInput={{
          sessionId: session.id,
        }}
        onSuccess={({checkoutSessionId}) => {
          console.log(`Stripe checkout session succeeded. session id:`);
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
