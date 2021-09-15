/* eslint-disable react-native/no-raw-text */
import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import {Button, TextInput, RadioButton} from "react-native-paper";
import AuthContext from "../context/auth-context";
import * as Colors from "../styles/abstracts/colors";
import AppHeader from "./Common/AppHeader";
import {HOST_PORT} from "@env";
import DatePickerComp from "./Common/DatePickerComp";

const UpdateProfileScreen = ({navigation, route}) => {
  const {profile} = route.params;
  const [fname, setFname] = useState(profile.fname);
  const [lname, setLname] = useState(profile.lname);
  const [dob, setDob] = useState(new Date(1598051730000));
  const [nic, setNic] = useState(profile.nic);
  const [gender, setGender] = useState("male");

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  useEffect(() => {
    if (profile.dob !== null) {
      // console.log(profile.dob);
      setDob(new Date(profile.dob + "T00:00:00"));
    }
    if (profile.gender !== null || profile.gender !== "none") {
      setGender(profile.gender);
    }
  }, []);

  const sendUpdateReq = async () => {
    try {
      const config = {
        method: "patch",
        url: `${HOST_PORT}/api/v1/users/me`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        data: {fname, lname, dob, nic, gender},
      };
      const response = await axios(config);
      console.log(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProfileUpdate = () => {
    if (fname !== "" && lname !== "" && nic !== "") {
      sendUpdateReq();
      navigation.goBack();
    }
  };

  const cancelUpdate = () => {
    // setFname("");
    // setLname("");
    // setPhone("");
    navigation.goBack();
  };

  const handleDate = val => {
    setDob(val);
  };

  return (
    <ScrollView>
      <AppHeader navigation={navigation} title="Edit Profile" />

      <Text>{JSON.stringify(profile)}</Text>

      <View style={styles.container}>
        <TextInput
          label="First name"
          onChangeText={txt => setFname(txt)}
          dense
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
          dense
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
        <DatePickerComp handleDate={handleDate} date={dob} title="Update DOB" />
        <TextInput
          label="NIC"
          onChangeText={txt => setNic(txt)}
          dense
          style={styles.textInput}
          mode="outlined"
          value={nic}
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />
        <View style={styles.radioGroup}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{marginRight: 20}}>Gender: </Text>
            <View style={styles.raidoRow}>
              <RadioButton
                value="male"
                status={gender === "male" ? "checked" : "unchecked"}
                onPress={() => setGender("male")}
              />
              <Text>Male</Text>
            </View>
            <View style={styles.raidoRow}>
              <RadioButton
                value="female"
                status={gender === "female" ? "checked" : "unchecked"}
                onPress={() => setGender("female")}
              />
              <Text>Female</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnGroup}>
          <Button mode="contained" onPress={() => handleProfileUpdate()}>
            Update
          </Button>
          <Button style={{marginTop: 5}} onPress={() => cancelUpdate()}>
            Cancel
          </Button>
        </View>
      </View>
    </ScrollView>
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
  raidoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioGroup: {
    marginTop: 10,
  },
  btnGroup: {
    marginTop: 10,
  },
});
