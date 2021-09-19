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

import SelectBox from "react-native-multi-selectbox";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

import DynamicForm from "@coffeebeanslabs/react-native-form-builder";
import RNPickerSelect from "react-native-picker-select";

const K_OPTIONS = [
  {
    item: "kg",
    id: "kg",
  },
  {
    item: "pcs",
    id: "pcs",
  },
  {
    item: "g",
    id: "g",
  },
];

function GigScreen3({navigation, route}) {
  const onSubmit = formFields => {
    // Actions on submit button click.

    console.log("Form submitted with fields: ", selectedUnit);
    console.log("Form submitted with fields: ", unit);
    console.log("Form submitted with fields: ", price);
  };

  const [selectedUnit, setSelectedTeam] = useState({});
  const [unit, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function setUnit() {
    return val => setSelectedTeam(val);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />

      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />

      <View style={styles.selectBox}>
        <SelectBox
          labelStyle={styles.labelText}
          label={"Select Unit"}
          options={K_OPTIONS}
          value={selectedUnit}
          onChange={setUnit()}
          hideInputFilter={false}
        />
      </View>

      <Text style={styles.labelText}>No. of Units</Text>
      <TextInput
        style={styles.input}
        onChangeText={setQuantity}
        value={unit}
        placeholder="Enter Number of Units for selling"
        keyboardType="numeric"
      />
      <Text style={styles.labelText}>Unit Price (Rs.)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="Enter Selling Price of a Unit"
        keyboardType="numeric"
      />

      <Button
        accessibilityLabel="submit-button"
        title="Submit"
        buttonStyle={styles.button}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectBox: {
    margin: 20,
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
  button: {
    width: "40%",
    alignSelf: "center",
    margin: 20,
  },
});

export default GigScreen3;
