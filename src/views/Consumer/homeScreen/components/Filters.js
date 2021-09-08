/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-raw-text */
import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button, IconButton} from "react-native-paper";
import Modal from "react-native-modal";
import * as Colors from "../../../../styles/abstracts/colors";
import RNPickerSelect from "react-native-picker-select";

function Filters(props) {
  const [val, setVal] = useState("Vegetable");

  return (
    <View style={{flex: 1}}>
      <Modal
        style={{justifyContent: "flex-end", margin: 0}}
        isVisible={props.showFilters}
        hasBackdrop={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Apply filters</Text>
            <IconButton
              color={Colors.errorColor.color}
              icon="close-circle"
              size={20}
              onPress={props.toggleModal}
            />
          </View>

          <RNPickerSelect
            style={styles.picker}
            onValueChange={e => props.handleCategory(e)}
            placeholder={{}}
            value={props.category}
            items={[
              {label: "Vegetable", value: "vegetable"},
              {label: "Fruit", value: "fruit"},
            ]}
          />

          <View style={{flexDirection: "row"}}>
            {props.showResult && (
              <Button mode="text" onPress={props.clearFilters}>
                Clear
              </Button>
            )}
            <Button style={styles.mainBtn} mode="contained" onPress={props.applyFilters}>
              Apply
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
    paddingBottom: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 30,
  },
  title: {
    color: Colors.primary.color,
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "red",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  mainBtn: {
    width: 150,
    marginLeft: 10,
  },
});
