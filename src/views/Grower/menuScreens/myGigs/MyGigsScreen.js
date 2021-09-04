/* eslint-disable arrow-body-style */
import React from "react";
import {ScrollView, TouchableOpacity, StyleSheet, View, SafeAreaView} from "react-native";


import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

export const MyGigsScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="My Support" />
      <Text style={styles.text}>Support Screen</Text>
     
   
    </View>
  );
};

const styles = StyleSheet.create({
 
});
