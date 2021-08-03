/* eslint-disable react/no-array-index-key */
import React from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import {ConsumerGig} from "./ConsumerGig";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const GigRow = ({gigs, title}) => {
  return (
    <View>
      <Text style={styles.gigRowTitle}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
        {gigs.map((gig, index) => (
          <ConsumerGig direction="row" {...gig} key={index} />
        ))}
        <TouchableOpacity style={styles.loadMoreCard}>
          <Text style={styles.loadMoreTxt}>Load More</Text>
          <MaterialIcon name="autorenew" size={30} color={Colors.secondary.color} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default GigRow;

const styles = StyleSheet.create({
  loadMoreCard: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 100,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    paddingLeft: 5,
    backgroundColor:"#eee",
  },
  gigRowTitle: {
    padding: 10,
    paddingTop: 20,
    fontSize: 18,
    color: Colors.primary.color,
    fontWeight: "bold",
  },
  loadMoreTxt: {
    color: Colors.primary.color,
  },
});
