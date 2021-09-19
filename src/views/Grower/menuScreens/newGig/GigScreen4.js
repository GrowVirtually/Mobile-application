// src/views/Grower/NewGig.js

import React, {useState, useEffect, useContext} from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from "react-native";

import DynamicForm from "@coffeebeanslabs/react-native-form-builder";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

function GigScreen4({navigation, route}) {
  const {
    gigType,
    gigCategory,
    gigTitle,
    gigDescription,
    deliveryOp,
    selectedUnit,
    quantity,
    price,
    minOrderAmount,
    latitude,
    longitude,
  } = route.params;

  const onSubmitGetLocation = formFields => {
    // Actions on submit button click.

    navigation.navigate("GigScreen5", {});
  };

  const formTemplate = {
    data: [
      {
        component: "input-date",
        field_name: "gigExpDate",
        is_mandatory: "true",
        meta: {
          title: "Gig Expiration Date",
        },
      },
    ],
  };

  const onSubmit = screen1formFields => {
    // Actions on submit button click.
    navigation.navigate("GigScreenImage", {});
    console.log("Gig Type: ", gigType);
    console.log("Gig Category: ", gigCategory);
    console.log("Gig Title: ", gigTitle);
    console.log("Gig Desc: ", gigDescription);
    console.log("Gig delivery: ", deliveryOp);
    console.log("Gig unit: ", selectedUnit);
    console.log("quantity: ", quantity);
    console.log("price: ", price);
    console.log("minOrderAmount:", minOrderAmount);
    console.log("latitude:", latitude);
    console.log("longitude:", longitude);

    //Post Data to database from here
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />

      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />

      <View style={styles.selectBox}>
        <Text>{latitude}</Text>
        <Text>{longitude}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          accessibilityLabel="submit-button"
          title="Get Location"
          buttonStyle={styles.button}
          onPress={onSubmitGetLocation}
        />
      </View>
      <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
    </View>
  );
}

export default GigScreen4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  labelText: {
    marginLeft: 15,
    marginRight: 15,
    color: "#000000",
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: "40%",
    alignSelf: "center",
    margin: 60,
  },
  button: {
    width: "40%",
    alignSelf: "center",
    margin: 20,
  },
});
