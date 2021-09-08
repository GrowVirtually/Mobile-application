import React, {useState} from "react";
import {Button, Text, View, StyleSheet} from "react-native";
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

          <Button title="Hide modal" onPress={props.toggleModal} />
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
