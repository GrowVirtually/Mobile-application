// src/views/Grower/NewGig.js

import React from "react";
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

function GigScreen2({navigation, route}) {
  const {gigType, gigCategory} = route.params;

  const formTemplate = {
    data: [
      {
        component: "image",
        field_name: "headerImage",
        meta: {
          label: "alt text for header image",
          source: "https://image.flaticon.com/icons/png/512/4944/4944728.png",
        },
        style: {
          width: 200,
          height: 200,
        },
      },
      {
        component: "input-text",
        field_name: "title",
        is_mandatory: "true",
        meta: {
          label: "Gig Title",
          placeholder: "Enter Title..",
        },
      },

      {
        component: "input-text",
        field_name: "description",
        is_mandatory: "true",
        meta: {
          label: "Gig Description",
          placeholder: "Enter Gig Description..",
        },
      },

      {
        index: 5,
        component: "input-radio",
        field_name: "deliveryOption",
        is_mandatory: "true",
        meta: {
          text: "Delivery Option",
          data: [
            {
              label: "Avaialble",
              value: "available",
            },
            {
              label: "Not available",
              value: "notAvailable",
            },
          ],
        },
      },
    ],
  };

  const onSubmit = formFields => {
    // Actions on submit button click.

    navigation.navigate("GigScreen3", {
      gigType: gigType,
      gigCategory: gigCategory,
      gigTitle: formFields.title.value,
      gigDescription: formFields.description.value,
      deliveryOp: formFields.deliveryOption.value,
    });
    console.log("Gig Type: ", gigType);
    console.log("Gig Category: ", gigCategory);
    console.log("Gig Title: ", formFields.title.value);
    console.log("Gig Description: ", formFields.description.value);
    console.log("Delivery Option: ", formFields.deliveryOption.value);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />

      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />

      <ScrollView>
        <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
      </ScrollView>

      <Button
        accessibilityLabel="submit-button"
        title="Back"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("NewGig")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: "40%",
    alignSelf: "center",
    margin: 20,
  },
});

export default GigScreen2;
