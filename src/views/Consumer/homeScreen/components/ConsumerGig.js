/* eslint-disable prettier/prettier */
import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";
import * as Colors from "../../../../styles/abstracts/colors";
import {useNavigation} from "@react-navigation/core";
import {Dimensions} from "react-native";
const {width} = Dimensions.get("screen");

export const ConsumerGig = ({
  gigTitle,
  unitPrice,
  expireDate,
  id,
  user,
  unit,
  direction,
  images,
}) => {
  const growerName = `${user.fname} ${user.lname}`;

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
      style={direction === "row" ? ConsumerGigStyle.rowItem : ConsumerGigStyle.gridItem}
      onPress={() =>
        navigation.navigate("GigScreen", {
          gigTitle,
          unitPrice,
          expireDate,
          growerName,
          imgUrl,
          id,
        })
      }>
      {images.length === 0 ? (
        <Card.Cover
          style={ConsumerGigStyle.img}
          source={require("../../../../assets/gigPlaceholder.png")}
        />
      ) : (
        <Card.Cover style={ConsumerGigStyle.img} source={{uri: imgUrl}} />
      )}

      <View style={ConsumerGigStyle.cardContent}>
        <View style={ConsumerGigStyle.cardLeft}>
          <Text style={ConsumerGigStyle.gigTitle}>
            {gigTitle.length > 10 ? gigTitle.slice(0, 17) + ".." : gigTitle}
          </Text>
          <Text style={ConsumerGigStyle.gigSubTitle}>
            Rs {unitPrice} /{unit}
          </Text>
          <Text style={ConsumerGigStyle.expireTxt}>
            Expires in {getDays(expireDate) + " " + (getDays(expireDate) > 1 ? "days" : "day")}
          </Text>
        </View>
        <View style={ConsumerGigStyle.cardRight}>
          <Avatar.Text
            size={24}
            label={growerName
              .split(" ")
              .map(name => name.charAt(0))
              .join("")}
            color="#fff"
            style={{backgroundColor: Colors.primary.color}}
          />
          <Text style={ConsumerGigStyle.avatarTxt}>
            {growerName.length > 10 ? growerName.slice(0, 9) + ".." : growerName}
          </Text>
        </View>
      </View>
    </Card>
  );
};
const ConsumerGigStyle = StyleSheet.create({
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
