/* eslint-disable react/no-array-index-key */
import React from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import {ConsumerGig} from "./ConsumerGig";
import {ActivityIndicator, Button} from "react-native-paper";

const GigGrid = ({gigs, title, nextPage, prevPage, page, emptyResult}) => {
  return (
    <View style={gigs.length === 0 && {paddingBottom: 150}}>
      <Text style={styles.gigRowTitle}>{title}</Text>
      {gigs.length === 0 ? (
        <View styles={styles.loading}>
          <ActivityIndicator animating={true} />
        </View>
      ) : (
        <View style={styles.grid}>
          {gigs.map((gig, index) => (
            <ConsumerGig direction="grid" {...gig} key={index} />
          ))}
          <View style={styles.btns}>
            <Button disabled={page === 1} onPress={() => prevPage()}>
              Back
            </Button>
            <Button disabled={emptyResult} onPress={() => nextPage()}>
              Next
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default GigGrid;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 130,
    backgroundColor: "#eee",
  },
  gigRowTitle: {
    padding: 10,
    paddingTop: 20,
    fontSize: 18,
    color: Colors.primary.color,
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
  loading: {
    height: 133,
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "red",
  },
  btns: {
    marginTop: 10,
    flexDirection: "row",
  },
});
