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

export const OrderDetail = ({
  id,
  paymentAmount,
  createdAt,
  date,
  grower,
  price,
  isOrderCompleted,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.orderNoRow}>
        <Text style={styles.orderTxt}>Order # </Text>
        <Text style={styles.orderTxt}>{id}</Text>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.dateTxt}>{createdAt}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon style={{marginRight: 5}} name="account" size={16} color="#555" />
          <Text style={styles.dateTxt}>{grower}</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.priceTxt}>Rs. {paymentAmount}</Text>
      </View>
      <View style={styles.statusRow}>
        {isOrderCompleted ? (
          <>
            <Icon
              style={{marginRight: 5}}
              name="information"
              size={18}
              color={Colors.secondary.color}
            />
            <Text style={styles.statusTxt}>Order completed </Text>
          </>
        ) : (
          <>
            <Icon
              style={{marginRight: 5}}
              name="information"
              size={18}
              color={Colors.errorColor.color}
            />
            <Text style={[styles.statusTxt, {color: Colors.errorColor.color}]}>Pending</Text>
          </>
        )}
      </View>

      <Image
        style={styles.logo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN0SURBVO3BQW5cSwIDwWSh73/lHC3+gqsCGq+lsWVGxC/M/OcwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTXjyUhJ+k8kQS3qFyk4Sm0pLwk1SeOMyUw0w5zJQXH6bySUl4RxKayhNJ+CSVT0rCJx1mymGmHGbKi2+WhHeovCMJN0m4UXlHEprKE0l4h8p3OsyUw0w5zJQXv4zKTRJukvAvO8yUw0w5zJQXv0wSmkpTeYfKTRKayt/sMFMOM+UwU158M5XfJAlN5QmVP8lhphxmymGmvPiwJPw/qbQkNJWWhKbSktBUWhKayk0S/mSHmXKYKYeZ8uIhld9M5UblRuVvcpgph5lymCkvHkpCU2lJ+CSVptKS0FTekYR3qNwk4ZNUvtNhphxmymGmxC/8oCTcqHynJDSVn5SEptKScKPynQ4z5TBTDjMlfuGBJDSVdyThHSrvSMKNyjuS0FRaEprKTRKayk0SblSeOMyUw0w5zJT4hQeScKPSkvAOlSeS0FRaEppKS0JT+c0OM+UwUw4z5cUPU7lJQktCU3mHSktCU2lJeEcS3qHSkvAOlZaEpvLEYaYcZsphpsQvPJCEptKScKPyRBKayjuScKPyLznMlMNMOcyUF3+4JDSVptKScKPSVFoSWhJuVG6S0FRuktBUbpLQVJ44zJTDTDnMlBffTOUmCTcqN0loKi0JN0loKk8k4SYJTyShqXzSYaYcZsphprz4ZkloKk3lJglNpam0JDyRhD9JEprKdzrMlMNMOcyU+IW/WBLeofJEEm5U3pGEG5WWhKbySYeZcpgph5kSv/BAEn6Syk0SnlB5RxKaSktCU2lJ+CSVJw4z5TBTDjPlxYepfFISbpLwhMpNEp5QeULlJgmfdJgph5lymCkvvlkS3qHyhEpLwk0SblRaEm6S8IRKS0JTaSqfdJgph5lymCkv/jEqLQlN5UblJgk3Ki0JLQk3SbhReeIwUw4z5TBTXvzjVFoSmso7VN6h0pJwo9KS8EmHmXKYKYeZ8uKbqXwnlRuVd6jcJOEdKi0JTeVG5ScdZsphphxmyosPS8JPSsKNSktCU2lJuFG5SUJLQlO5UWlJ+EmHmXKYKYeZEr8w85/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNM+R+dRoj72rWteAAAAABJRU5ErkJggg==",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  orderNoRow: {
    flexDirection: "row",
  },
  orderTxt: {
    color: Colors.fontColor.color,
    fontSize: 15,
    fontWeight: "bold",
  },
  dateRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTxt: {
    color: "#555",
  },
  priceRow: {
    marginTop: 7,
  },
  priceTxt: {
    color: Colors.primary.color,
    fontSize: 18,
    fontWeight: "bold",
  },
  statusRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  statusTxt: {
    fontWeight: "bold",
    color: Colors.secondary.color,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
