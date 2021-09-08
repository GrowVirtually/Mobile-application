/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-raw-text */
import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button} from "react-native-paper";
import Modal from "react-native-modal";
import * as Colors from "../../../../styles/abstracts/colors";

function Filters(props) {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={{justifyContent: "flex-end", margin: 0}}
        isVisible={props.showFilters}
        hasBackdrop={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Hello!</Text>

          <View style={{flexDirection: "row"}}>
            <Button mode="outlined" onPress={props.toggleModal}>
              Cancel
            </Button>
            <Button mode="outlined" onPress={props.toggleSetShowResult}>
              {props.showResult ? "Clear" : "Apply"}
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Filters;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.primary.color,
  },
});
