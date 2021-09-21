/* eslint-disable prefer-template */
import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";
import {HOST_PORT} from "@env";
import axios from "axios";
import AuthContext from "../../../../context/auth-context";

const GigTitle = ({priceTag, gigTitle, expireDate, unit, stock, gigId}) => {
  const getDays = dateStr => {
    const today = new Date();
    const date = new Date(dateStr);
    const diffInTime = date.getTime() - today.getTime();
    const days = diffInTime / (1000 * 3600 * 24);
    return Math.round(days);
  };

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const saveGig = async () => {
    try {
      const data = new FormData();
      data.append("gigId", gigId);

      const response = await axios({
        method: "post",
        url: `${HOST_PORT}/api/v1/users/me/saved`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        data,
      });
      console.log("saved", response.data);
      alert("This gig has been saved to your favourites");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.gigTitlesHeart}>
        <View style={styles.gigTitlesLeft}>
          <Text style={styles.gigTitle}>
            {gigTitle.length > 31 ? gigTitle.slice(0, 30) + ".." : gigTitle}
          </Text>
          <Text style={styles.gigPrice}>
            Rs. {priceTag} per {unit}
          </Text>
        </View>
        <TouchableOpacity onPress={() => saveGig()}>
          <MaterialIcon name="heart" size={25} color={Colors.secondary.color} />
        </TouchableOpacity>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.availableTxt}>
          {stock} {unit} available
        </Text>
        <MaterialIcon style={styles.expireTxt} size={8} name="checkbox-blank-circle" />
        <Text style={styles.expireTxt}>
          Expires in {getDays(expireDate) + " " + (getDays(expireDate) > 1 ? "days" : "day")}
        </Text>
      </View>
    </View>
  );
};

export default GigTitle;

const styles = StyleSheet.create({
  gigTitlesHeart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  gigTitle: {
    fontSize: 22,
    color: Colors.fontColor.color,
  },
  gigPrice: {
    fontSize: 14,
    color: Colors.fontColor.color,
  },
  availableTxt: {
    fontSize: 14,
    color: Colors.primary.color,
    fontWeight: "bold",
  },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  expireTxt: {
    marginLeft: 10,
    color: Colors.errorColor.color,
    fontWeight: "bold",
  },
});
