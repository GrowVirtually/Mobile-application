/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-raw-text */
import React, {useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button, IconButton, RadioButton, TextInput} from "react-native-paper";
import Modal from "react-native-modal";
import * as Colors from "../../../../styles/abstracts/colors";
import RNPickerSelect from "react-native-picker-select";
import {ScrollView} from "react-native-gesture-handler";

function Filters(props) {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={{justifyContent: "flex-end", margin: 0}}
        isVisible={props.showFilters}
        hasBackdrop={false}>
        <ScrollView>
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

            {/* Deliverability */}
            <View style={{marginTop: 10}}>
              <Text style={styles.label}>Does seller provide delivery?</Text>
              <View style={{flexDirection: "row", marginLeft: 10, marginTop: 5}}>
                <View style={styles.radioGroup}>
                  <RadioButton
                    value="true"
                    status={props.deliverability === "true" ? "checked" : "unchecked"}
                    onPress={() => props.handleDeliveryAbility("true")}
                  />
                  <Text>Yes</Text>
                </View>
                <View style={styles.radioGroup}>
                  <RadioButton
                    value="false"
                    status={props.deliverability === "false" ? "checked" : "unchecked"}
                    onPress={() => props.handleDeliveryAbility("false")}
                  />
                  <Text>No</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <RadioButton
                    value="both"
                    status={props.deliverability === "" ? "checked" : "unchecked"}
                    onPress={() => props.handleDeliveryAbility("")}
                  />
                  <Text>Show both</Text>
                </View>
              </View>
            </View>

            {/* Unit */}
            <View style={styles.pickerGroup}>
              <Text style={styles.label}>Unit: </Text>
              <RNPickerSelect
                onValueChange={e => props.handleUnit(e)}
                placeholder={{}}
                value={props.unit}
                items={[
                  {label: "Kilograms", value: "kg"},
                  {label: "Pieces", value: "pcs"},
                  {label: "All units", value: ""},
                ]}
              />
            </View>

            {/* Price */}
            <Text style={styles.label}> Unit price: </Text>
            <View style={styles.textInputGroup}>
              <TextInput
                mode="outlined"
                dense
                label="Min"
                keyboardType="numeric"
                value={props.gt}
                style={styles.textInput}
                onChangeText={text => props.handleGt(text)}
                outlineColor={Colors.primary.color}
              />
              <Text style={{fontSize: 20}}> - </Text>
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                dense
                label="Max"
                value={props.lt}
                onChangeText={text => props.handleLt(text)}
                style={styles.textInput}
                outlineColor={Colors.primary.color}
              />
            </View>
            {/* Distance */}
            <View style={{marginTop: 10}}>
              <Text style={styles.label}>Distance:</Text>
              <View style={{flexDirection: "row", marginLeft: 10, marginTop: 5}}>
                <View style={styles.radioGroup}>
                  <RadioButton
                    value="60000"
                    status={props.distance === "200000" ? "checked" : "unchecked"}
                    onPress={() => props.handleDistance("200000")}
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
              <Text style={styles.label}>Gig category:</Text>
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
              <Text style={styles.label}>Type: </Text>
              <RNPickerSelect
                onValueChange={e => props.handleCategory(e)}
                placeholder={{}}
                value={props.category}
                items={[
                  {label: "Vegetable", value: "vegetable"},
                  {label: "Fruit", value: "fruit"},
                  {label: "All items", value: ""},
                ]}
              />
            </View>

            <View style={styles.pickerGroup}>
              <Text style={styles.label}>Sort by: </Text>
              <RNPickerSelect
                onValueChange={e => props.handleSortby(e)}
                placeholder={{}}
                value={props.sortby}
                items={[
                  {label: "Increasing unit price", value: "unitPrice"},
                  {label: "Decreasing unit price", value: "-unitPrice"},
                  {label: "Do not sort", value: ""},
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
        </ScrollView>
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
    marginRight: 10,
    fontWeight: "bold",
    // marginTop: 5,
    paddingTop: 5,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  pickerGroup: {
    // marginBottom: 5,
    // marginTop: 5,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  textInput: {
    width: "40%",
    backgroundColor: "#fff",
    marginTop: 5,
  },
  textInputGroup: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 5,
  },
});
