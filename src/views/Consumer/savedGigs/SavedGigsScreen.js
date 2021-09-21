import React, {useEffect, useState, useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import AppHeader from "../../Common/AppHeader";
import {HOST_PORT} from "@env";
import axios from "axios";
import AuthContext from "../../../context/auth-context";
import {ConsumerGig} from "../homeScreen/components/ConsumerGig";
import {SavedGig} from "./SavedGig";

const SavedGigsScreen = ({navigation}) => {
  const [gigs, setGigs] = useState([]);

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getSavedGigs();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getSavedGigs();
  }, []);

  const getSavedGigs = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${HOST_PORT}/api/v1/users/me/saved`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(
        "saved",
        // response.data.data.savedGigs.map(item => item.gigTitle),
      );
      setGigs(response.data.data.savedGigs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader navigation={navigation} title="Favorites" />
      <View style={styles.container}>
        <View>
          {gigs.map((item, index) => (
            <SavedGig key={index} direction="grid" {...item} />
          ))}
        </View>
      </View>
    </>
  );
};

export default SavedGigsScreen;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // paddingBottom: 130,
    backgroundColor: "#eee",
  },
  container: {
    alignItems: "center",
  },
});
