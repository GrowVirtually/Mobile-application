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

import axios from "axios";
import AuthContext from "../../../../context/auth-context";

import {HOST_PORT} from "@env";

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

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [userId, setUserId] = useState("");
  const [gigExpDate, setGigExpDate] = useState("");

  const onSubmitGetLocation = formFields => {
    // Actions on submit button click.

    navigation.navigate("GigScreen5", {});
  };

  const formTemplate = {
    data: [
      {
        component: "input-text",
        field_name: "gigExpDate",
        is_mandatory: "true",
        meta: {
          label: "Gig Duration",
          placeholder: "Enter Duration of the gig..",
        },
      },
    ],
  };

  //Get User Id
  const getProfile = async () => {
    try {
      const response = await axios.get(`${HOST_PORT}/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setUserId(response.data.data.profile.id);
      console.log("user", userId);
    } catch (error) {
      console.error(error);
    }
  };

  getProfile();

  console.log("Gig duration", gigExpDate);

  //Post Data to database from here
  const postGig = async () => {
    const data = {
      gigType: gigType,
      gigTitle: gigTitle,
      gigCategory: gigCategory,
      gigDescription: gigDescription,
      minOrderAmount: minOrderAmount,
      unit: selectedUnit,
      unitPrice: price,
      stock: quantity,
      sold: price,
      gigDuration: gigExpDate,
      userid: userId,
      location: {
        lat: 6.933906500876093,
        lng: 79.8502538395318,
      },
    };
    console.log("Data Object", data);

    console.log(gigExpDate);
    try {
      const config = {
        method: "post",
        url: "https://grovi-backend.herokuapp.com/api/v1/gigs",
        data: data,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios(config);

      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async formFields => {
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
    console.log("gigExpDate:", formFields.gigExpDate.value);
    console.log("Jwt:", jwt);
    setGigExpDate(formFields.gigExpDate.value);
    // console.log(userId);
    postGig();
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
