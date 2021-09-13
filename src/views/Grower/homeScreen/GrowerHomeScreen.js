import React from "react";
import {StyleSheet, StatusBar, Text, View, SafeAreaView} from "react-native";

import * as Colors from "../../../styles/abstracts/colors";
import AppHeader from "../../Common/AppHeader";
import {GrowerMenu} from "../homeScreen/components/GrowerMenu";

export const GrowerHomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="Grower home" />
      <GrowerMenu navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({});
