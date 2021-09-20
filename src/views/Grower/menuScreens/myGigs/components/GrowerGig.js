import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";
import * as Colors from "../../../../../styles/abstracts/colors";
import {useNavigation} from "@react-navigation/core";
import {Dimensions} from "react-native";
const {width} = Dimensions.get("screen");

export const GrowerGig = ({gigTitle, unitPrice, expireDate, id, user, unit, direction}) => {
  const imgUrl = "https://picsum.photos/200/300?random=1";

  const navigation = useNavigation();

  const getDays = dateStr => {
    const today = new Date();
    const date = new Date(dateStr);
    const diffInTime = date.getTime() - today.getTime();
    const days = diffInTime / (1000 * 3600 * 24);
    return Math.round(days);
  };
  return (
    <Card
      style={direction === "row" ? styles.rowItem : styles.gridItem}
      onPress={() =>
        navigation.navigate("", {
          gigTitle,
          unitPrice,
          expireDate,

          imgUrl,
          id,
        })
      }>
      <Card.Cover style={styles.img} source={{uri: imgUrl}} />
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <Text style={styles.gigTitle}>
            {gigTitle.length > 10 ? gigTitle.slice(0, 17) + ".." : gigTitle}
          </Text>
          <Text style={styles.gigSubTitle}>
            Rs {unitPrice} /{unit}
          </Text>
          <Text style={styles.expireTxt}>
            Expires in {getDays(expireDate) + " " + (getDays(expireDate) > 1 ? "days" : "day")}
          </Text>
        </View>
        <View style={styles.cardRight}>
          <Text style={styles.avatarTxt}></Text>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    width: "46%",
    margin: 5,
  },
  rowItem: {
    width: width / 2,
    margin: 5,
    marginBottom: 15,
  },
  img: {
    height: 116,
  },
  cardContent: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLeft: {},
  cardRight: {
    justifyContent: "center",
    alignItems: "center",
  },
  gigTitle: {
    fontSize: 13,
    color: Colors.fontColor.color,
  },
  gigSubTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.fontColor.color,
  },
  expireTxt: {
    fontSize: 10,
    color: Colors.errorColor.color,
  },
  avatarTxt: {
    fontSize: 8,
    color: Colors.fontColor.color,
  },
});
