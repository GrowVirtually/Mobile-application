/* eslint-disable arrow-body-style */
import React from "react";
import {ScrollView, TouchableOpacity, StyleSheet, View, SafeAreaView} from "react-native";
import {Searchbar} from "react-native-paper";
import {ConsumerContent} from "./components/ConsumerContent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../styles/abstracts/colors";
import AppHeader from "../../Common/AppHeader";

export const ConsumerHomeScreen = ({navigation}) => {
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
        <ConsumerContent />
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
});
