/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from "react";
import {Button, Paragraph, Dialog, Portal} from "react-native-paper";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import * as Colors from "../../../styles/abstracts/colors";
import * as Btn from "../../../styles/base/button";

export const AddToCartDialog = props => {
  return (
    <View>
      <Portal>
        <Dialog visible={props.visible} onDismiss={props.hideDialog}>
          <View style={styles.container}>
            <Dialog.Title style={styles.title}>Added to cart</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: Colors.secondary.color}]}
              onPress={props.hideDialog}>
              <Text style={styles.btnTxt}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={props.hideDialog}>
              <Text style={styles.btnTxt}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.primary.color,
    textAlign: "center",
  },
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
  },
});
