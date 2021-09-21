import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

export const GrowerMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuWrapper}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("NewGig")}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Icon name="plus-circle" color={Colors.secondary.color} size={25} />
              <Icon name="barley" color={Colors.secondary.color} size={40} />
            </View>
            <Text style={styles.menuItemText}>New Gig</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("MyGigsScreen")}>
            <Icon name="barley" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>My Gigs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("FindConsumer")}>
            <Icon name="account-search" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Find Consumers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Orders")} style={styles.menuItem}>
            <Icon name="cart-arrow-down" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>My Orders</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.single}>
          <TouchableOpacity onPress={() => navigation.navigate("Support")} style={styles.menuItem}>
            <Icon name="help-circle" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.img} source={require("../../../../assets/logo.png")} />

        {/* <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Earnings")} style={styles.menuItem}>
            <Icon name="currency-usd" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Support")} style={styles.menuItem}>
            <Icon name="help-circle" color={Colors.secondary.color} size={40} />
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  menuWrapper: {
    // margin: 20,
  },
  menuItem: {
    elevation: 20,
    padding: 10,
    backgroundColor: "#fff",
    width: 150,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 5,
    // minHeight: 100,
  },
  menuItemText: {
    fontSize: 14,
    marginTop: 10,
    color: "#555",

    // fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginTop: 30,
  },
  single: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginTop: 30,
    marginLeft: 100,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginLeft: 45,
  },
});
