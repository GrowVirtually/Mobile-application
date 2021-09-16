/* eslint-disable react-native/no-raw-text */
import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import {StyleSheet, Text, View, ScrollView, Image, Platform, Alert} from "react-native";
import {Button, TextInput, RadioButton, IconButton, ActivityIndicator} from "react-native-paper";
import AuthContext from "../context/auth-context";
import * as Colors from "../styles/abstracts/colors";
import AppHeader from "./Common/AppHeader";
import {HOST_PORT} from "@env";
import DatePickerComp from "./Common/DatePickerComp";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {launchImageLibrary, launchCamera} from "react-native-image-picker";

const UpdateProfileScreen = ({navigation, route}) => {
  const {profile} = route.params;
  const [fname, setFname] = useState(profile.fname);
  const [lname, setLname] = useState(profile.lname);
  const [dob, setDob] = useState(new Date(1598051730000));
  const [nic, setNic] = useState(profile.nic);
  const [gender, setGender] = useState("male");
  const [imgLink, setImgLink] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

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
      setPhoto(null);
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
    setPhoto(null);
    navigation.goBack();
  };

  const handleDate = val => {
    setDob(val);
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      // console.log(response);
      if (response.didCancel) {
        console.log("User canceled");
      } else if (response.error) {
        console.error(response.error);
      } else if (response) {
        setPhoto(response);
      }
    });
  };

  const handleCamera = () => {
    launchCamera({noData: true}, response => {
      // console.log(response);
      if (response.didCancel) {
        console.log("User canceled");
      } else if (response.error) {
        console.error(response.error);
      } else if (response) {
        setPhoto(response);
      }
    });
  };

  const createFormData = (photoImg, body) => {
    const data = new FormData();
    data.append("img", {
      name: photoImg.assets[0].fileName,
      type: photoImg.assets[0].type,
      uri:
        Platform.OS === "android"
          ? photoImg.assets[0].uri
          : photoImg.assets[0].uri.replace("file://", ""),
    });
    // Object.keys(body).forEach(key => {
    //   data.append(key, body[key]);
    // });
    return data;
  };

  const handleUploadPhoto = async () => {
    try {
      if (photo !== null) {
        setLoading(true);
        const response = await axios.patch(
          `${HOST_PORT}/api/v1/users/me/picture`,
          createFormData(photo, {userId: nic}),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              authorization: `Bearer ${jwt}`,
            },
          },
        );
        console.log("upload", response.data.status);
        setLoading(false);
        if (response.data.status === "success") {
          Alert.alert(
            "Successfully uploaded",
            "Your profile picture has been successfully uploaded",
            [{text: "OK", onPress: () => null}],
          );
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const removePhoto = async () => {
    const empty = new FormData();
    empty.append("img", "");
    try {
      const response = await axios.patch(`${HOST_PORT}/api/v1/users/me/picture`, empty, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete", response.data.status);
      if (response.data.status === "success") {
        Alert.alert("Successfully removed", "Your profile picture has been successfully removed", [
          {text: "OK", onPress: () => null},
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppHeader navigation={navigation} title="Edit Profile" />

      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          {profile.imgLink !== "" || photo !== null ? (
            <Image
              style={styles.img}
              source={{
                uri: photo !== null ? photo.assets[0].uri : profile.imgLink,
              }}
            />
          ) : (
            <Icon name="account-circle-outline" color={Colors.tertiary.color} size={100} />
          )}
        </View>

        <View style={styles.imgBtns}>
          {loading ? (
            <ActivityIndicator color={Colors.secondary.color} animating={true} />
          ) : (
            <>
              <IconButton
                icon="image-plus"
                color={Colors.secondary.color}
                size={27}
                onPress={handleChoosePhoto}
              />

              <IconButton
                icon="camera"
                color={Colors.secondary.color}
                size={27}
                onPress={handleCamera}
              />
              <IconButton
                icon="upload"
                color={Colors.secondary.color}
                size={27}
                disabled={photo === null}
                onPress={handleUploadPhoto}
              />
              <IconButton
                icon="delete-forever"
                color={Colors.secondary.color}
                size={27}
                disabled={profile.imgLink === ""}
                onPress={removePhoto}
              />
            </>
          )}
        </View>

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
      </ScrollView>
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
    marginBottom: 50,
  },
  img: {
    padding: 10,
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  imgContainer: {
    alignSelf: "center",
  },
  imgBtns: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
});
