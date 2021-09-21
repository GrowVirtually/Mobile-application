// src/views/Grower/NewGig.js

import React from "react";
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, Image} from "react-native";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

function Support({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="Support" showBackButton={true} />
      <Image
        style={styles.logo2}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135596.png",
        }}
      />
      <TouchableOpacity style={styles.button2} onPress={() => onSubmit()}>
        <Text style={styles.btnTxt}>Contact Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo2: {
    position: "absolute",
    top: 150,
    left: 75,
    width: 250,
    height: 250,
  },
  button2: {
    width: "50%",
    alignSelf: "center",
    margin: 20,
    elevation: 8,
    backgroundColor: Colors.primary.color,
    marginTop: 20,
    top: 400,
    alignItems: "center",
    paddingVertical: 0,
    borderRadius: 30,
    // minHeight: 100,
  },
  btnTxt: {
    color: "#ffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Support;
