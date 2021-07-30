import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import * as Colors from "../../styles/abstracts/colors";
import * as Btn from "../../styles/base/button";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BigButton({onPress, type, text, icon, style}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          style,
          Btn.button,
          type === "primary"
            ? {backgroundColor: Colors.primary.color}
            : {backgroundColor: Colors.secondary.color},
        ]}>
        {icon && <MaterialIcon name={icon} size={22} color="#fff" style={{marginRight: 5}} />}
        <Text style={Btn.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

BigButton.defaultProps = {
  onPress: null,
  width: "100%",
  type: "primary",
  text: "button text",
  style: {},
};
