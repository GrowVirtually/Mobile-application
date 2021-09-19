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

function NewGigScreen01({navigation}) {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const formTemplate = {
    data: [
      {
        component: "image",
        field_name: "headerImage",
        meta: {
          label: "alt text for header image",
          source: "https://image.flaticon.com/icons/png/512/2689/2689417.png",
        },
        style: {
          width: 200,
          height: 200,
        },
      },

      {
        component: "input-dropdown",
        field_name: "type",
        is_mandatory: "true",
        meta: {
          text: "Gig Type",
          items: [
            {
              label: "Vegetables",
              value: "vegetables",
            },
            {
              label: "Fruits",
              value: "fruits",
            },
            {
              label: "Other",
              value: "other",
            },
          ],
        },
      },

      {
        component: "input-dropdown",
        field_name: "category",
        is_mandatory: "true",
        meta: {
          text: "Gig Category",
          items: [
            {
              label: "Pumpkin",
              value: "pumpkin",
            },
            {
              label: "Bitter Guard",
              value: "bitterGuard",
            },
            {
              label: "Brinjal",
              value: "brinjal",
            },
            {
              label: "Tomatoes",
              value: "tomatoes",
            },
            {
              label: "Potatoes",
              value: "Potatoes",
            },
          ],
        },
      },
    ],
  };

  async function postGig() {
    const data = {
      gigType: "pre",
      gigTitle: "XXCarrot xxxxxx",
      gigCategory: "vegetable",
      gigDescription: "For immediate sale",
      minOrderAmount: "45.22",
      unit: "kg",
      unitPrice: "100.00",
      stock: "30.22",
      sold: "38.22",
      gigDuration: "20",
      userid: 2,
      location: {
        lat: 6.933906500876093,
        lng: 79.8502538395318,
      },
    };

    try {
      const config = {
        method: "post",
        url: "https://grovi-backend.herokuapp.com/api/v1/gigs",
        headers: {
          "Content-Type": "application/json",
        },
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
  }

  const onSubmit = screen1formFields => {
    // Actions on submit button click.
    navigation.navigate("GigScreen2", {
      gigType: screen1formFields.type.value,
      gigCategory: screen1formFields.category.value,
    });
    console.log("Form submitted Gig Type: ", screen1formFields.type.value);
    console.log("Form submitted Gig Category: ", screen1formFields.category.value);

    // postGig();
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />
      <ScrollView>
        <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewGigScreen01;
