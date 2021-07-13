import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Base from "../../styles/base/base";
import * as Colors from "../../styles/abstracts/colors";
import AuthContext from "../../context/auth-context";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";
import axios from "axios";

const MobileNumberVerifyScreen = ({ navigation, route }) => {

  const CELL_COUNT = 4;

  const [userOTP, setValue] = useState("");
  const ref = useBlurOnFulfill({ userOTP, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    userOTP,
    setValue
  });

  const { authContext } = useContext(AuthContext);

  const handleOTPVerification = async () => {
    try {
      const otpVerification = await axios.post("http://10.0.2.2:3000/api/v1/users/verifyOTP", {
        phone: route.params.phone,
        hash: route.params.hash,
        otp: userOTP
      });

      if (otpVerification.data.status === "success") {
        // otp verified
        // check user found or not
        if (otpVerification.data.userFound) {
          console.log(otpVerification.data);
          const { token } = otpVerification.data;
          const { signIn } = authContext;
          // 1) set the token to async storage
          await signIn(token);
          navigation.navigate("HomeScreen");
        } else if (!otpVerification.data.userFound) {
          navigation.navigate("SignupScreen1", {
            phone: otpVerification.data.phone
          });
        }
      } else {
        // console.log(otpVerification.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Enter the code \n we sent to you`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={userOTP}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {userOTP.length === 4 && (
        <Button title={"OK"} onPress={handleOTPVerification} />
      )}
      <Button title={"Not your number?"} onPress={() => navigation.navigate("EnterMobileNumberScreen")} />
    </View>
  );
};

export default MobileNumberVerifyScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: "#fff"
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    textAlign: "center"
  },
  focusCell: {
    borderColor: Colors.secondary.color,
    borderWidth: 3
  },
  goBackBtnTxt: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary.color,
    marginBottom: 20
  }
});
