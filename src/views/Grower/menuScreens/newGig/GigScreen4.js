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
  Image,
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
    gigDuration,
    latitude,
    longitude,
  } = route.params;

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [userId, setUserId] = useState("");

  const onSubmitGetLocation = formFields => {
    // Actions on submit button click.
    navigation.navigate("GigScreen5");
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

  // console.log("Gig duration", gigExpDate);

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
      gigDuration: gigDuration,
      userid: userId,
      location: {
        lat: 6.933906500876093,
        lng: 79.8502538395318,
      },
    };

    // console.log(gigExpDate);
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
    alert("Gig Published Successfully");
    navigation.navigate("GrowerHome");
    postGig();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />

      <AppHeader navigation={navigation} title="Add a New Gig" showBackButton={true} />

      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.button} onPress={() => onSubmitGetLocation()}>
          <Text style={styles.btnTxt}>Set Location</Text>
        </TouchableOpacity>

        <Text style={[styles.statusTxt, {color: "#000"}]}>Latitude: {latitude}</Text>

        <Text style={[styles.statusTxt, {color: "#000"}]}>Longitude: {longitude}</Text>

        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
          }}
        />

        <Image
          style={styles.logo2}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3556/3556904.png",
          }}
        />

        <TouchableOpacity style={styles.button2} onPress={() => onSubmit()}>
          <Text style={styles.btnTxt}>Publish Gig</Text>
        </TouchableOpacity>
      </View>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  statusTxt: {
    margin: 5,
    top: -140,
    fontWeight: "bold",
    color: Colors.secondary.color,
  },

  logo: {
    position: "absolute",
    top: 5,
    left: 120,
    width: 150,
    height: 150,
  },
  logo2: {
    position: "absolute",
    top: 300,
    left: 120,
    width: 150,
    height: 150,
  },

  btn: {
    backgroundColor: "#000",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    margin: 20,
    elevation: 8,
    backgroundColor: Colors.primary.color,
    marginTop: 8,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 30,
    // minHeight: 100,
  },
  button2: {
    width: "50%",
    alignSelf: "center",
    margin: 20,
    elevation: 8,
    backgroundColor: Colors.primary.color,
    marginTop: 20,
    top: 100,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 30,
    // minHeight: 100,
  },
  btnTxt: {
    color: "#ffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
