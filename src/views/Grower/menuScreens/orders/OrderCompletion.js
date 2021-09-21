import React, {useEffect, useContext, useState} from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  Dimensions,
  Alert,
} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";

import axios from "axios";
import * as Colors from "../../../../styles/abstracts/colors";
import AppHeader from "../../../Common/AppHeader";
import AuthContext from "../../../../context/auth-context";
import {HOST_PORT} from "@env";

const {width} = Dimensions.get("screen");
export default function OrderCompletion({navigation, route}) {
  const {loginState} = useContext(AuthContext);
  const jwt = loginState.userToken;

  const [gigData, setGigData] = useState({
    coordinates: {coordinates: [], crs: {}, type: ""},
    deliveryAbility: "",
    expireDate: "",
    gigCategory: "",
    gigDescription: "",
    gigTitle: "",
    gigType: "",
    id: "",
    minOrderAmount: "",
    sold: "",
    stock: "",
    unit: "",
    unitPrice: "",
    user: {
      customer: {
        grower: {
          growerType: "",
        },
      },
      fname: "",
      lname: "",
    },
    userid: "",
    images: {
      id: "",
      gigId: "",
      imgLink: "",
    },
  });
  const [isLoading, setLoading] = useState(false);

  const {
    id,
    paymentAmount,
    createdAt,
    date,
    growerId,
    price,
    isOrderCompleted,
    isConsumerCompleted,
    isGrowerAccepted,
    isGrowerCompleted,
    qrLink,
    quantity,
    updatedAt,
    consumerId,
    deliveryMethod,
    gigId,
    gigTitle,
    growerFname,
    growerLname,
    consumerName,
  } = route.params;

  const onPressComplete = () => {
    alert("Order Completion successful!");
    navigation.navigate("GrowerHome");
  };

  const onPressCancel = () => {
    navigation.goBack();
  };

  const LeftContent = props => <Avatar.Icon {...props} icon="pin" />;

  var currentTime = Date().toLocaleString();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary.color} />
      <AppHeader navigation={navigation} title="My Orders" showBackButton={true} />

      <ScrollView>
        <Card>
          <Card.Title title="Order Details" subtitle={currentTime} left={LeftContent} />
          <Card.Content>
            <Title>Order # {id}</Title>
            <Card.Cover source={{uri: "https://cdn-icons-png.flaticon.com/512/3502/3502601.png"}} />

            <Paragraph>
              Order Status:
              <Text style={[styles.statusTxt, {color: Colors.errorColor.color}]}>Pending</Text>
            </Paragraph>
            <Paragraph>
              Consumer's Delivery Option:
              <Text style={[styles.statusTxt, {color: "#000"}]}>{deliveryMethod}</Text>
            </Paragraph>
            <Paragraph>
              Gig Title:
              <Text style={[styles.statusTxt, {color: "#000"}]}>{gigTitle}</Text>
            </Paragraph>
            <Paragraph>
              Quantity Required:
              <Text style={[styles.statusTxt, {color: "#000"}]}>{Math.round(quantity)}/KG</Text>
            </Paragraph>
            <Paragraph>
              Order Placed on:
              <Text style={[styles.statusTxt, {color: "#000"}]}>{createdAt}</Text>
            </Paragraph>
          </Card.Content>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalContent}>
                    <Image
                      style={styles.logo}
                      source={{
                        uri: qrLink,
                      }}
                    />
                  </View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close QR</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Show QR</Text>
            </Pressable>
          </View>
          {/* <Card.Actions>
            <Button>Complete Order</Button>
            <Button>Cancel</Button>
          </Card.Actions> */}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.viewOrder} onPress={() => onPressComplete()}>
              <Text style={styles.viewOrderTxt}>Complete Order</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewOrder} onPress={() => onPressCancel()}>
              <Text style={styles.viewOrderTxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Card>

        {/* <Text>{JSON.stringify(gigData)}</Text>
        <Text>{JSON.stringify(gigData.images[0].imgLink)}</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: -100,
    width: 300,
    height: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 200,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,

    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: Colors.primary.color,
  },
  buttonClose: {
    backgroundColor: Colors.primary.color,
    position: "absolute",
    bottom: 100,
    width: 180,
    height: 60,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  statusTxt: {
    fontWeight: "bold",
    color: Colors.secondary.color,
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  btnContainer: {
    marginTop: 0,
    marginRight: 60,
    marginLeft: 60,
  },
  viewOrder: {
    elevation: 15,
    backgroundColor: Colors.primary.color,
    marginTop: 10,
    alignItems: "center",

    borderRadius: 40,
    // minHeight: 100,
  },
  viewOrderTxt: {
    color: "#ffff",
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
