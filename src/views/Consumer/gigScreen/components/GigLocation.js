/* eslint-disable react-native/no-raw-text */
import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/core";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {GOOGLE_API_KEY} from "@env";
import {Button} from "react-native-paper";

const GigLocation = ({address, deliveryAbility, geoData}) => {
  const navigation = useNavigation();
  const [myLocation, setMyLocation] = useState(null);
  const [routeData, setRouteData] = useState({});
  const [distance, setDistane] = useState("");
  const delta = {latitudeDelta: 0.01, longitudeDelta: 0.01};

  useEffect(() => {
    const getMyLocation = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("mylocation");
        if (jsonValue != null) {
          const obj = JSON.parse(jsonValue);
          setMyLocation(obj);
          console.log("consumer location not null", obj);
          try {
            const config = {
              method: "get",
              url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${obj.latitude},${obj.longitude}&destinations=${geoData.latitude},${geoData.longitude}&key=${GOOGLE_API_KEY}`,
              headers: {},
            };
            axios(config)
              .then(response => {
                // console.log(JSON.stringify(response.data));
                console.log(response.data.rows[0].elements[0]);
                setRouteData(response.data.rows[0].elements[0]);
                setDistane(response.data.rows[0].elements[0].distance.text);
              })
              .catch(error => {
                console.log(error);
              });
          } catch (error) {
            console.error(error);
          }
        } else {
          console.log("location null");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getMyLocation();
  }, [geoData]);

  // useEffect(() => {

  // }, []);

  return (
    <View>
      <View style={styles.addressRow}>
        <MaterialIcon color={Colors.fontColor.color} size={25} name="map-marker-radius" />
        <View style={styles.addresRight}>
          <View style={styles.locationRow}>
            <Text style={{fontWeight: "bold"}}>{distance} to seller</Text>
            <TouchableOpacity>
              {/* <Text
                style={styles.viewOnMap}
                onPress={() =>
                  navigation.navigate("ConsumerMap", {
                    marker: geoData,
                    myLocation,
                    routeData,
                  })
                }>
                View on map
              </Text> */}
            </TouchableOpacity>
          </View>
          <View>
            <Button
              style={{marginVertical: 5}}
              onPress={() =>
                navigation.navigate("ConsumerMap", {
                  marker: geoData,
                  myLocation,
                  routeData,
                })
              }
              mode="outlined"
              uppercase={false}
              icon="map-search-outline">
              View on map
            </Button>
            {/* <Text>{geoData.longitude}</Text> */}
            {/* <Text style={styles.address}>{address}</Text> */}
            <Text style={styles.deliverMethod}>
              {deliveryAbility === true
                ? `Seller will deliver to you`
                : `You will get the order at seller`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GigLocation;

const styles = StyleSheet.create({
  addressRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  addresRight: {
    marginLeft: 10,
  },
  locationRow: {
    flexDirection: "row",
  },
  viewOnMap: {
    marginLeft: 15,
    marginBottom: 5,
    color: Colors.secondary.color,
    textDecorationLine: "underline",
  },
  address: {
    color: Colors.fontColor.color,
    marginBottom: 5,
  },
  deliverMethod: {
    fontWeight: "bold",
    color: Colors.fontColor.color,
  },
});
