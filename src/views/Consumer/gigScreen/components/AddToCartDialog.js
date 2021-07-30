/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, {useState} from "react";
import {Dialog, Portal} from "react-native-paper";
import {Image, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import * as Btn from "../../../../styles/base/button";
import NumericInput from "react-native-numeric-input";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const AddToCartDialog = props => {
  const {gigTitle, priceTag, expireDate, growerName, imgUrl, id} = props.gig;
  const [val, setVal] = useState(1);
  return (
    <View>
      <Portal>
        <Dialog visible={props.visible} onDismiss={props.hideDialog}>
          <View style={styles.container}>
            <Dialog.Content>
              <View style={styles.row}>
                <Image source={{uri: imgUrl}} style={styles.gigImg} />
                <View style={styles.rightCol}>
                  <Text style={styles.gigTitle}>{gigTitle}</Text>
                  <Text style={styles.avail}>45KG Available</Text>
                  <NumericInput
                    rounded
                    onChange={value => setVal(value)}
                    minValue={0}
                    rightButtonBackgroundColor={Colors.secondary.color}
                    leftButtonBackgroundColor={Colors.secondary.color}
                    iconStyle={{color: "#FFF"}}
                    borderColor={Colors.secondary.color}
                    totalHeight={30}
                    totalWidth={70}
                  />
                  <Text style={styles.price}>{`Rs. ${val * 170}.00`}</Text>
                </View>
              </View>
            </Dialog.Content>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: Colors.secondary.color}]}
              onPress={props.hideDialog}>
              <MaterialIcon name="cart-plus" size={22} color="#fff" style={{marginRight: 5}} />

              <Text style={styles.btnTxt}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AddToCartDialog;

const styles = StyleSheet.create({
  button: {
    ...Btn.button,
    width: "90%",
    padding: 10,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 5,
  },
  btnTxt: {
    ...Btn.btnText,
    fontSize: 16,
  },
  container: {
    paddingBottom: 10,
    paddingTop: 25,
  },
  gigImg: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightCol: {
    paddingLeft: 15,
    flexDirection: "column",
  },
  gigTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  price: {
    fontSize: 18,
    marginTop: 5,
    color: Colors.fontColor.color,
  },
  avail: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
    color: Colors.secondary.color,
  },
});
