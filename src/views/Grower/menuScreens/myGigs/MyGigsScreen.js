import React, {useEffect, useContext, useState} from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import {Searchbar, ActivityIndicator, Button} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";
import AuthContext from "../../../../context/auth-context";
import {HOST_PORT} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

import GigGrid from "./components/GigGrid";

function MyGigsScreen({navigation}) {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [userId, setUserId] = useState("");
  const [myGigs, setMyGigs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Get User Id
  const getProfile = async () => {};

  //want to fetch the data as soon as the component mounts, so calling getGigs function in useEffect hook.
  useEffect(() => {
    async function getGigs() {
      //tO GET Profile Id
      let myProfile;
      try {
        myProfile = await axios.get(`${HOST_PORT}/api/v1/users/me`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
      } catch (error) {
        console.error(error);
      }
      console.log("userid", userId);

      //To make API call to get gigs
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/growers/${myProfile.data.data.profile.id}/gigs`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setMyGigs(response.data.data.gigs);
        console.log("Gig Data : ", myGigs);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    setLoading(true);
    getGigs();
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} title="My Gigs" showBackButton={true} />

      <ScrollView>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <View>
            <GigGrid myGigs={myGigs} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    paddingBottom: 150,
    marginTop: 50,
  },
});

export default MyGigsScreen;
