import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";

const SavedGigsScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="Gigs" />

      <Text>saved</Text>
    </>
  );
};

export default SavedGigsScreen;

const styles = StyleSheet.create({});
