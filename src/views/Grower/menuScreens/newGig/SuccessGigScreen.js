// src/views/Grower/NewGig.js

import React, {useContext, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";
import DynamicForm from "@coffeebeanslabs/react-native-form-builder";
import axios from "axios";
import AuthContext from "../../../../context/auth-context";

function SuccessGigScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />
      <Text>Successful</Text>
    </View>
  );
}

export default SuccessGigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
