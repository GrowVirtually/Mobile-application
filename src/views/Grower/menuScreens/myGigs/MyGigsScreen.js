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

  const [emptyResult, setEmptyResult] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [myGigs, setMyGigs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      alert("You are already on first page");
    }
  };

  //want to fetch the data as soon as the component mounts, so calling getGigs function in useEffect hook.
  useEffect(() => {
    async function getGigs() {
      try {
        const response = await axios({
          method: "get",
          url: `${HOST_PORT}/api/v1/growers/3/gigs`,
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
      <AppHeader navigation={navigation} title="My Support" />
      <Text style={styles.text}>My Gig</Text>

      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          // <View>
          //   {myGigs.map(item => (
          //     <Text>{item.gigType}</Text>
          //   ))}
          // </View>
          // <FlatList
          //   data={myGigs}
          //   renderItem={data => <GigGrid {...data.item} navigation={navigation} />}
          //   keyExtractor={item => item.gigTitle}
          // />
          <View>
            {/* {myGigs.map(item => (
              <GigGrid key={item.id}>{item.gigTitle}</GigGrid>
            ))} */}

            <GigGrid myGigs={myGigs} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MyGigsScreen;
