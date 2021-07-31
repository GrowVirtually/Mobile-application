import React from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Colors from "../../../../styles/abstracts/colors";

const GigLocation = () => {
  return (
    <View>
      <View style={styles.addressRow}>
        <MaterialIcon color={Colors.fontColor.color} size={25} name="map-marker" />
        <View style={styles.addresRight}>
          <View style={styles.locationRow}>
            <Text style={{fontWeight: "bold"}}>1.4 Km</Text>
            <TouchableOpacity>
              <Text style={styles.viewOnMap}>View on map</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.address}>No. 33/2, Siebel Avnue, Kirulapone</Text>
            <Text style={styles.deliverMethod}>Seller will deliver to you</Text>
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
