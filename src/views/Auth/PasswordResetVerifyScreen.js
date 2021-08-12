import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {HOST_PORT} from "@env";
import * as Colors from "../../styles/abstracts/colors";
import * as Base from "../../styles/base/base";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import axios from "axios";

const PasswordResetVerifyScreen = ({navigation}) => {
  const CELL_COUNT = 4;

  const [verifyCode, setValue] = useState("");
  const ref = useBlurOnFulfill({verifyCode, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    verifyCode,
    setValue,
  });
  const [errors, setErrors] = useState([]);

  const handlePasswordVerification = () => {
    // await axios.patch(`http://${HOST}:${PORT}/api/v1/users/resetPassword`, {
    //   token: verifyCode,
    // });
    navigation.navigate("PasswordResetScreen", {
      token: verifyCode,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        animation="bounceIn"
        duration={1500}
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />
      <Text style={styles.heading}>{`Enter the code\nwe sent to your email`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={verifyCode}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {verifyCode.length === 4 && (
        <TouchableOpacity style={styles.button} onPress={handlePasswordVerification}>
          <Text style={styles.btnText}>Ok</Text>
        </TouchableOpacity>
      )}
      {!!errors.length && <Text style={styles.helperText}>{errors[0]}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
        <Text style={styles.linkText}>Didn't receive code?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetVerifyScreen;

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: Colors.primary.color,
    borderRadius: 10,
    marginTop: 25,
    padding: 15,
    width: "80%",
  },
  cell: {
    borderColor: "#ccc",
    borderWidth: 2,
    fontSize: 24,
    height: 40,
    lineHeight: 38,
    textAlign: "center",
    width: 40,
  },
  codeFieldRoot: {marginTop: 20},
  container: {
    ...Base.container,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  focusCell: {
    borderColor: Colors.secondary.color,
    borderWidth: 3,
  },
  heading: {
    color: Colors.primary.color,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  helperText: {
    color: Colors.errorColor.color,
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  linkText: {
    color: Colors.secondary.color,
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  logo: {
    ...Base.logoLarge,
    // width:'100%',
  },
  root: {flex: 1, padding: 20},
  title: {fontSize: 30, textAlign: "center"},
});
