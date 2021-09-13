/* eslint-disable react-native/no-raw-text */
import React, {useContext, useEffect, useState} from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {Avatar, Title, Caption, Text, TouchableRipple, Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../context/auth-context";
import {useStore} from "../context/StoreProvider";
import * as Colors from "../styles/abstracts/colors";
import AppHeader from "./Common/AppHeader";
import axios from "axios";
import {HOST_PORT} from "@env";
import {GOOGLE_API_KEY} from "@env";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {authContext, loginState} = useContext(AuthContext);
  const [myLocation, setMyLocation] = useState(null);
  const {globalState, globalDispatch} = useStore();
  const [geoInfo, setGeoInfo] = useState("");
  const [profile, setProfile] = useState({});

  const jwt = loginState.userToken;

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(`${HOST_PORT}/api/v1/users/me`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log(response.data.data.profile);
        setProfile(response.data.data.profile);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    const getMyLocation = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("mylocation");
        if (jsonValue != null) {
          console.log("profile location not null", jsonValue);
          const obj = JSON.parse(jsonValue);
          setMyLocation(obj);
        } else {
          console.log("profile loction null");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getMyLocation();
  }, []);

  useEffect(() => {
    if (myLocation !== null) getGoogleInfo();
  }, [myLocation]);

  const handleToggleRole = () => {
    globalDispatch({type: "TOGGLE_USER_TYPE"});

    globalState.usertype === "grower"
      ? navigation.navigate("GrowerHome")
      : navigation.navigate("ConsumerHome");
  };

  const handleLogout = async () => {
    const {signOut} = authContext;
    await signOut();
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error(e);
    }
    navigation.navigate("AuthStackNavigator");
  };

  const userinfo = {
    username: `${globalState.firstname} ${globalState.lastname}`,
    email: globalState.userEmail,
  };

  const handleUpdateLoc = () => {
    navigation.navigate("LocationUpdater", {prevLoc: myLocation});
  };

  const getGoogleInfo = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${myLocation.latitude},${myLocation.longitude}&result_type=street_address&key=${GOOGLE_API_KEY}`,
      );
      console.log(response.status);
      setGeoInfo(response.data.results[0].formatted_address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader navigation={navigation} title="My Profile" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: "row", marginTop: 15}}>
              {profile && profile.imgLink === "" ? (
                <Avatar.Text
                  size={80}
                  label={userinfo.username
                    .split(" ")
                    .map(name => name.charAt(0))
                    .join("")}
                  color="#fff"
                />
              ) : (
                <Avatar.Image
                  source={{
                    uri: profile.imgLink,
                  }}
                  size={80}
                />
              )}

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

                {/* <Caption style={styles.caption}>{userinfo.email}</Caption> */}
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
              <Text style={{marginLeft: 20}}>
                {/* {myLocation === null
                  ? `empty`
                  : `${myLocation.latitude.toFixed(4)}, ${myLocation.longitude.toFixed(4)}`} */}
                <Text>{geoInfo}</Text>
              </Text>
            </View>
            <View style={styles.row}>
              <Button mode="outlined" onPress={() => handleUpdateLoc()}>
                Update my location
              </Button>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>{profile && profile.phone}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>{profile && profile.email}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="card-account-details" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>NIC: {profile.nic ? profile.nic : "none"}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="account" color="#777777" size={20} />
              <Text style={{marginLeft: 20}}>
                Gender: {profile.gender ? profile.gender : "none"}
              </Text>
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
            <TouchableRipple
              onPress={() => {
                navigation.navigate("UpdateProfile", {profile});
              }}>
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
    fontSize: 18,
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
    alignItems: "center",
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
