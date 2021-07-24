import React, {useReducer} from "react";
import {StyleSheet, Text, TouchableOpacity, View, StatusBar} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import userTypeReducer from "../../reducers/userType";

import * as Base from "../../styles/base/base";
import * as Typography from "../../styles/base/typography";
import * as Colors from "../../styles/abstracts/colors";

const SignUpPathDeciderScreen = ({navigation}) => {
  const [userType, userTypeDispatch] = useReducer(userTypeReducer, "consumer");

  const handlePath = userType => {
    userType === "consumer"
      ? userTypeDispatch({type: "CONSUMER"})
      : userTypeDispatch({type: "GROWER"});
    navigation.navigate("EnterMobileNumberScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <View style={styles.header}>
        <Text style={styles.heading}>W e l c o m e</Text>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => handlePath("consumer")}
          style={[styles.button_round, {backgroundColor: Colors.secondary.color}]}>
          <Text style={styles.button_txt}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePath("grower")} style={styles.button_round}>
          <Text style={styles.button_txt}>SELL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPathDeciderScreen;

const styles = StyleSheet.create({
  button_round: {
    // ...Buttons.btn_round,
    backgroundColor: Colors.primary.color,
    padding: 15,
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  button_txt: {
    ...Typography.btn_round_text,
    color: "#fff",
    fontWeight: "normal",
  },
  buttons: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  heading: {
    ...Typography.heading_main,
    borderColor: "green",
    color: Colors.primary.color,
    fontSize: 22,
    fontWeight: "normal",
  },
  logo: {
    ...Base.logoLarge,
    // width:'100%',
  },
  miniBtn: {
    backgroundColor: Colors.secondary.color,
    padding: 5,
  },
});
