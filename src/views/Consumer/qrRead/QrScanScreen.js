import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";

const QrScanScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="Gigs" />

      <View>
        <Text>Scan QR</Text>
      </View>
    </>
  );
};

export default QrScanScreen;

const styles = StyleSheet.create({});
