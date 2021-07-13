import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
// import {Button} from 'react-native-paper';

import AuthContext from "../context/auth-context";

const HomeScreen = ({ navigation }) => {

  const { authContext } = useContext(AuthContext);

  const handleLogout = async () => {
    const { signOut } = authContext;
    await signOut();
    navigation.navigate("SignUpPathDeciderScreen");
  };

  return (
    <View style={newStyle.container}>
      <Text style={newStyle.title}>I want to,</Text>
      <TouchableOpacity
        style={[newStyle.btn, newStyle.btnFocused]}
        onPress={() => navigation.navigate("ConsumerHome")}>
        <Text style={newStyle.btnText}>Buy things</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={newStyle.btn}
        onPress={() => navigation.navigate("GrowerHome")}>
        <Text style={newStyle.btnText}>Sell things</Text>
      </TouchableOpacity>
      <Button title={"Logout"} onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const newStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 100,
    padding: 10,
    backgroundColor: "green",
    flex: 1
  },
  title: {
    fontSize: 20
  },

  btn: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center"
  },
  btnFocused: {
    backgroundColor: "white"
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 15
  }
});
