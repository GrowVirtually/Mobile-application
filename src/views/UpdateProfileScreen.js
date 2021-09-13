import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AppHeader from "./Common/AppHeader";

const UpdateProfileScreen = ({navigation}) => {
  return (
    <>
      <AppHeader navigation={navigation} title="My Profile" />
      <View>
        <Text>Update prof</Text>
      </View>
    </>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({});
