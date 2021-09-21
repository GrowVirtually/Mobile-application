import React, {useState, useEffect, useContext} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";
import * as Colors from "../../../../../styles/abstracts/colors";
import {useNavigation} from "@react-navigation/core";
import {Dimensions} from "react-native";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native-gesture-handler";
import axios from "axios";
import AuthContext from "../../../../../context/auth-context";

import {HOST_PORT} from "@env";

const {width} = Dimensions.get("screen");

export const GrowerGig = ({
  gigTitle,
  unitPrice,
  expireDate,
  id,
  user,
  unit,
  stock,
  sold,
  direction,
  images,
}) => {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const imgUrl = "https://cdn-icons-png.flaticon.com/512/3362/3362807.png";

  const navigation = useNavigation();

  const getDays = dateStr => {
    const today = new Date();
    const date = new Date(dateStr);
    const diffInTime = date.getTime() - today.getTime();
    const days = diffInTime / (1000 * 3600 * 24);
    return Math.round(days);
  };

  const sendDeleteReq = async () => {
    try {
      const response = await axios.delete(`${HOST_PORT}/api/v1/gigs/${id}`, {
        data: {foo: "bar"},
        headers: {Authorization: `Bearer ${jwt}`},
      });

      console.log(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGigDelete = () => {
    sendDeleteReq();
    alert("Gig Deleted successfully!");
    navigation.goBack();
  };

  const editGig = () => {
    navigation.navigate("UpdateImage", {
      gigTitle,
      unitPrice,
      expireDate,
      id,
      user,
      unit,
      stock,
      sold,
      direction,
      images,
    });
  };

  return (
    <Card style={direction === "row" ? styles.rowItem : styles.gridItem}>
      {images.length === 0 ? (
        <Card.Cover style={styles.img} source={{uri: imgUrl}} />
      ) : (
        <Card.Cover style={styles.img} source={{uri: images[0].imgLink}} />
      )}

      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          {images.length !== 0 ? (
            // <Image
            //   style={styles.img}
            //   source={{
            //     uri: photo !== null ? photo.assets[0].uri : images[0].imgLink,
            //   }}
            <Text></Text>
          ) : (
            <TouchableOpacity style={styles.menuItem} onPress={() => editGig()}>
              <Icon name="content-save-edit-outline" color={Colors.secondary.color} size={30} />
            </TouchableOpacity>
          )}

          <View style={styles.cardRight}>
            <Text style={styles.gigTitle}>
              {gigTitle.length > 10 ? gigTitle.slice(0, 17) + ".." : gigTitle}
            </Text>
          </View>
          <Text style={styles.gigSubTitle}>
            Rs {unitPrice} /{unit}
          </Text>

          <Text style={styles.expireTxt}>
            Expires in {getDays(expireDate) + " " + (getDays(expireDate) > 1 ? "days" : "day")}
          </Text>
          <Text style={styles.gigSubTitle}>
            Sold: {Math.round(sold)} /{Math.round(stock)}
          </Text>
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleGigDelete()}>
          <Icon name="delete" color={Colors.secondary.color} size={30} />
        </TouchableOpacity>

        <Text style={styles.idTxt}>ID:{id}</Text>
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
    justifyContent: "space-around",
    alignItems: "flex-end",
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
  idTxt: {
    position: "absolute",
    bottom: 5,
    right: 5,
    fontSize: 14,
    color: Colors.fontColor.color,
  },
  menuItem: {
    fontSize: 8,
    elevation: 2,
    padding: 0,
    backgroundColor: "#fff",
    marginTop: 8,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 5,
    // minHeight: 100,
  },
  menuItemText: {
    fontSize: 10,
    marginTop: 0,
    marginRight: 5,
    color: "#555",
  },
});
