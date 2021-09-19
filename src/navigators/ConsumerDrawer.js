/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React, {useContext} from "react";
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import * as Colors from "../styles/abstracts/colors";
import {Avatar} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../context/auth-context";
import {useStore} from "../context/StoreProvider";

const ConsumerDrawer = props => {
  const handleLogout = () => {
    alert("should done logout");
  };

  const handleSwichRole = () => {
    alert("handle role change");
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <SafeAreaView style={styles.header}>
        <Avatar.Text size={64} label="DD" style={{backgroundColor: "white", color: "green"}} />
        <Text style={styles.txt}>Dimuthu Dhanushka</Text>
      </SafeAreaView> */}

      {/* Default items */}
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        icon={({color, size}) => <MaterialCommunityIcons name="home" color="white" size={24} />}
        label={() => <Text style={styles.menuTxt}>Gigs</Text>}
        onPress={() => props.navigation.navigate("ConsumerHome")}
      />
      <DrawerItem
        icon={({color, size}) => <MaterialCommunityIcons name="bell" color="white" size={24} />}
        label={() => <Text style={styles.menuTxt}>Notifications</Text>}
        onPress={() => props.navigation.navigate("Notifications")}
      />

      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="account-circle" color="white" size={24} />
        )}
        label={() => <Text style={styles.menuTxt}>My Profile</Text>}
        onPress={() => props.navigation.navigate("ProfileScreen")}
      />
      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="cart-arrow-down" color="white" size={24} />
        )}
        label={() => <Text style={styles.menuTxt}>My Orders</Text>}
        onPress={() => props.navigation.navigate("MyOrders")}
      />

      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="qrcode-scan" color="white" size={24} />
        )}
        label={() => <Text style={styles.menuTxt}>Scan buyer's QR</Text>}
        onPress={() => props.navigation.navigate("QrScan")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  txt: {
    marginTop: 15,
    color: "white",
  },
  menuTxt: {color: "white", fontSize: 18},
  divider: {
    backgroundColor: "lightgray",
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  switchRole: {
    backgroundColor: Colors.secondary.color,
    alignItems: "center",
    padding: 10,
  },
});

export default ConsumerDrawer;
