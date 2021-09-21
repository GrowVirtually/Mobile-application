import React, {useEffect, useContext, useState} from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import {Button, TextInput, RadioButton, IconButton, ActivityIndicator} from "react-native-paper";

import axios from "axios";

import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";

import {HOST_PORT} from "@env";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {launchImageLibrary, launchCamera} from "react-native-image-picker";
import AuthContext from "../../../../context/auth-context";

export default function UpdateImage({navigation, route}) {
  const {gigTitle, unitPrice, expireDate, id, user, unit, stock, sold, direction, images} =
    route.params;
  const [myGigs, setMyGigs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);

  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

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
    data.append("gigId", id);
    // Object.keys(body).forEach(key => {
    //   data.append(key, body[key]);
    // });
    return data;
  };

  const handleUploadPhoto = async () => {
    try {
      if (photo !== null) {
        setLoading(true);
        const response = await axios.post(
          `${HOST_PORT}/api/v1/gigs/upload`,
          createFormData(photo, {id: id}),
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
    <View style={styles.container}>
      <AppHeader navigation={navigation} title="My Gigs" showBackButton={true} />

      <ScrollView>
        <Text>{gigTitle}</Text>
        <Text>{unitPrice}</Text>
        {/* <Text>{images[0].imgLink}</Text> */}

        <View style={styles.imgContainer}>
          {images.length !== 0 ? (
            <Image
              style={styles.img}
              source={{
                uri: photo !== null ? photo.assets[0].uri : images[0].imgLink,
              }}
            />
          ) : (
            <Text>No Images</Text>
          )}

          {/* <Image
            style={styles.img}
            source={{
              uri: photo !== null ? photo.assets[0].uri : images[0].imgLink,
            }}
          /> */}

          <View style={styles.imgBtns}>
            {isLoading ? (
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
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: "100%",
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
