/* eslint-disable arrow-body-style */
import axios from "axios";
import React, {useEffect, useContext, useState} from "react";
import {ScrollView, TouchableOpacity, StyleSheet, View, Text, SafeAreaView} from "react-native";
import {Searchbar, Button} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../../../context/auth-context";
import * as Colors from "../../../styles/abstracts/colors";
import AppHeader from "../../Common/AppHeader";
import {ConsumerGigs} from "./components/ConsumerGigs";
import {HOST_PORT} from "@env";

export const ConsumerHomeScreen = ({navigation}) => {
  const [gigs, setGigs] = useState([]);
  const [vegetableGigs, setVegetableGigs] = useState([]);
  const [fruitGigs, setFruitGigs] = useState([]);
  const {loginState} = useContext(AuthContext);

  const jwt = loginState.userToken;

  // Get gigs
  useEffect(() => {
    async function getGigs() {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/5.977553814423967,80.34890374890934?limit=100&distance=60000`,
          headers: {},
        });
        setGigs(response.data.data.gigs);
      } catch (error) {
        console.error(error);
      }
    }
    getGigs();
  }, []);

  // get vege gigs
  useEffect(() => {
    async function getGigs() {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/5.977553814423967,80.34890374890934?limit=100&distance=60000&gigCategory=vegetable`,
          headers: {},
        });
        setVegetableGigs(response.data.data.gigs);
      } catch (error) {
        console.error(error);
      }
    }
    getGigs();
  }, []);

  // get vege gigs
  useEffect(() => {
    async function getGigs() {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/gigs/5.977553814423967,80.34890374890934?limit=100&distance=60000&gigCategory=fruit`,
          headers: {},
        });
        setFruitGigs(response.data.data.gigs);
      } catch (error) {
        console.error(error);
      }
    }
    getGigs();
  }, []);

  return (
    <SafeAreaView>
      <AppHeader navigation={navigation} title="Gigs" />
      <View style={styles.searchbarContainer}>
        <Searchbar style={styles.searchbarLeft} placeholder="Search" />
        <TouchableOpacity style={styles.searchbarRight}>
          <MaterialCommunityIcons name="tune" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <ConsumerGigs {...{gigs, vegetableGigs, fruitGigs}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 5,
    flexDirection: "row",
    backgroundColor: Colors.primary.color,
  },
  searchbarLeft: {
    width: "80%",
  },
  searchbarRight: {
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: Colors.primary.color,
    width: "20%",
  },
  container: {
    flex: 1,
  },
});
