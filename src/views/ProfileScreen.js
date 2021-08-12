/* eslint-disable react-native/no-raw-text */
import React, {useContext} from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {Avatar, Title, Caption, Text, TouchableRipple, Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../context/auth-context";
import {useStore} from "../context/StoreProvider";
import * as Colors from "../styles/abstracts/colors";
import AppHeader from "./Common/AppHeader";

const ProfileScreen = () => {
  const {authContext, loginState} = useContext(AuthContext);
  const {globalState, globalDispatch} = useStore();
  const navigation = useNavigation();

  const handleToggleRole = () => {
    globalDispatch({type: "TOGGLE_USER_TYPE"});

    globalState.usertype === "grower"
      ? navigation.navigate("GrowerHome")
      : navigation.navigate("ConsumerHome");
  };

  const handleLogout = async () => {
    const {signOut} = authContext;
    await signOut();
    navigation.navigate("AuthStackNavigator");
  };

  const userinfo = {
    username: `${globalState.firstname} ${globalState.lastname}`,
    email: globalState.userEmail,
  };

  return (
    <>
      <AppHeader navigation={navigation} title="My Profile" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: "row", marginTop: 15}}>
              {/* <Avatar.Image
              source={{
                uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
              }}
              size={80}
            /> */}
              <Avatar.Text
                size={80}
                label={userinfo.username
                  .split(" ")
                  .map(name => name.charAt(0))
                  .join("")}
                color="#fff"
              />
              <View style={{marginLeft: 20}}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 15,
                      marginBottom: 5,
                    },
                  ]}>
                  {userinfo.username}
                </Title>
                <Caption style={styles.caption}>{userinfo.email}</Caption>
              </View>
            </View>
            <Button
              style={{marginTop: 20}}
              icon="sync"
              mode="contained"
              onPress={() => handleToggleRole()}>
              Switch to {globalState.usertype === "grower" ? "Consumer mode" : "Grower mode"}
            </Button>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>Nugegoda, Colombo 05</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>+94-712345792</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>john_doe@email.com</Text>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: "#dddddd",
                  borderRightWidth: 1,
                },
              ]}>
              <Title style={{color: Colors.primary.color}}>0 / 8</Title>
              <Caption>Active Gig Orders</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title style={{color: Colors.primary.color}}>LKR 140.50</Title>
              <Caption>Pending Clearence</Caption>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="barley" color={Colors.secondary.color} size={25} />
                <Text style={styles.menuItemText}>My Gigs</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="bank" color={Colors.secondary.color} size={25} />
                <Text style={styles.menuItemText}>Bank Details</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="cart-arrow-down" color={Colors.secondary.color} size={25} />
                <Text style={styles.menuItemText}>My Orders</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="cart-arrow-up" color={Colors.secondary.color} size={25} />
                <Text style={styles.menuItemText}>Gig Orders</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="account-edit-outline" color={Colors.secondary.color} size={25} />
                <Text style={styles.menuItemText}>Edit Profile</Text>
              </View>
            </TouchableRipple>
          </View>
          <Button
            style={styles.logout}
            icon="logout"
            mode="outlined"
            onPress={() => handleLogout()}>
            Log Out
          </Button>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  logout: {
    margin: 20,
  },
});
