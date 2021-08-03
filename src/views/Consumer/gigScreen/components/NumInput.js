import React, {useState} from "react";
import {StyleSheet, TextInput, Text, View, TouchableOpacity} from "react-native";
import * as Colors from "../../../../styles/abstracts/colors";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const NumInput = props => {
  const {val, setVal} = props;

  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    setVal(val - 1);
  };
  const handleOnChange = val => {
    const keyInt = parseInt(val, 10);
    console.log(val);
    setVal(keyInt);
  };

  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <TouchableOpacity onPress={() => handleIncrement()}>
        <MaterialIcon name="plus-circle" size={25} color={Colors.primary.color} />
      </TouchableOpacity>
      <TextInput
        style={styles.numericInput}
        value={val.toString()}
        keyboardType="numeric"
        onChange={e => handleOnChange(e.nativeEvent.text)}
      />
      <TouchableOpacity onPress={() => handleDecrement()}>
        <MaterialIcon name="minus-circle" size={25} color={Colors.primary.color} />
      </TouchableOpacity>
    </View>
  );
};

export default NumInput;

const styles = StyleSheet.create({
  numericInput: {
    textAlign: "center",
    width: 50,
    borderRadius: 5,
    borderColor: Colors.primary.color,
    borderWidth: 2,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
  },
});
