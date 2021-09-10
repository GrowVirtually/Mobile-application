/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-raw-text */
import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button, IconButton, RadioButton} from "react-native-paper";
import Modal from "react-native-modal";
import * as Colors from "../../../../styles/abstracts/colors";
import RNPickerSelect from "react-native-picker-select";

function Filters(props) {
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

          {/* Distance */}
          <View style={{marginTop: 10}}>
            <Text style={styles.label}>Gig category</Text>
            <View style={{flexDirection: "row", marginLeft: 10, marginTop: 5}}>
              <View style={styles.radioGroup}>
                <RadioButton
                  value="60000"
                  status={props.distance === "60000" ? "checked" : "unchecked"}
                  onPress={() => props.handleDistance("60000")}
                />
                <Text>{`> 5km`}</Text>
              </View>
              <View style={styles.radioGroup}>
                <RadioButton
                  value="5000"
                  status={props.distance === "5000" ? "checked" : "unchecked"}
                  onPress={() => props.handleDistance("5000")}
                />
                <Text>{`< 5km`}</Text>
              </View>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <RadioButton
                  value="1000"
                  status={props.distance === "1000" ? "checked" : "unchecked"}
                  onPress={() => props.handleDistance("1000")}
                />
                <Text>{`< 1km`}</Text>
              </View>
            </View>
          </View>

          {/* Category */}

          <View style={{marginTop: 10}}>
            <Text style={styles.label}>Gig category</Text>
            <View style={{flexDirection: "row", marginLeft: 10, marginTop: 5}}>
              <View style={styles.radioGroup}>
                <RadioButton
                  value="pre"
                  status={props.gigType === "pre" ? "checked" : "unchecked"}
                  onPress={() => props.handleGigType("pre")}
                />
                <Text>Pre harvest</Text>
              </View>
              <View style={styles.radioGroup}>
                <RadioButton
                  value="post"
                  status={props.gigType === "post" ? "checked" : "unchecked"}
                  onPress={() => props.handleGigType("post")}
                />
                <Text>Post harvest</Text>
              </View>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <RadioButton
                  value="post"
                  status={props.gigType === "" ? "checked" : "unchecked"}
                  onPress={() => props.handleGigType("")}
                />
                <Text>All</Text>
              </View>
            </View>
          </View>

          <View style={styles.pickerGroup}>
            <Text style={styles.label}>Category: </Text>
            <RNPickerSelect
              onValueChange={e => props.handleCategory(e)}
              placeholder={{}}
              value={props.category}
              items={[
                {label: "Vegetable", value: "vegetable"},
                {label: "Fruit", value: "fruit"},
                {label: "Both", value: ""},
              ]}
            />
          </View>

          <View style={styles.btnGroup}>
            {props.showResult && (
              <Button style={styles.mainBtn} mode="outlined" onPress={props.clearFilters}>
                Clear
              </Button>
            )}
            {!props.showResult ? (
              <Button style={{width: "100%"}} mode="contained" onPress={props.applyFilters}>
                Apply
              </Button>
            ) : (
              <Button style={styles.mainBtn} mode="contained" onPress={props.applyFilters}>
                Apply
              </Button>
            )}
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
    elevation: 30,
  },
  title: {
    color: Colors.primary.color,
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  mainBtn: {
    width: "47%",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    color: Colors.fontColor.color,
    marginLeft: 10,
    fontWeight: "bold",
  },
  pickerGroup: {
    marginBottom: 10,
    marginTop: 10,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});
