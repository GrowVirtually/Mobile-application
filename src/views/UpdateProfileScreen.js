import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-paper";
import * as Colors from "../styles/abstracts/colors";
import AppHeader from "./Common/AppHeader";

const UpdateProfileScreen = ({navigation, route}) => {
  const {profile} = route.params;
  const [fname, setFname] = useState(profile.fname);
  const [lname, setLname] = useState(profile.lname);
  const [phone, setPhone] = useState(profile.phone);
  return (
    <>
      <AppHeader navigation={navigation} title="Edit Profile" />

      <Text>{JSON.stringify(profile)}</Text>

      <View style={styles.container}>
        <TextInput
          label="First name"
          onChangeText={txt => setFname(txt)}
          style={styles.textInput}
          mode="outlined"
          value={fname}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        <TextInput
          label="Last name"
          onChangeText={txt => setLname(txt)}
          style={styles.textInput}
          mode="outlined"
          value={lname}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        <TextInput
          label="Phone"
          onChangeText={txt => setPhone(txt)}
          style={styles.textInput}
          mode="outlined"
          value={phone}
          selectionColor={Colors.secondary.color}
          keyboardType="numeric"
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
      </View>
    </>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
  },
});
