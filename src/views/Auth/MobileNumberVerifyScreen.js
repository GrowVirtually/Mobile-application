import React, {useState, StatusBar, useContext} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {HOST, PORT} from "@env";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import axios from "axios";
import * as Base from "../../styles/base/base";
import * as Colors from "../../styles/abstracts/colors";
import AuthContext from "../../context/auth-context";

const MobileNumberVerifyScreen = ({navigation, route}) => {
  const CELL_COUNT = 4;

  const [userOTP, setValue] = useState("");
  const ref = useBlurOnFulfill({userOTP, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    userOTP,
    setValue,
  });
  const [errors, setErrors] = useState([]);

  const {authContext} = useContext(AuthContext);

  const handleOTPVerification = async () => {
    try {
      const otpVerification = await axios.post(`http://${HOST}:${PORT}/api/v1/users/verifyOTP`, {
        phone: route.params.phone,
        hash: route.params.hash,
        otp: userOTP,
      });

      if (otpVerification.data.status === "success") {
        // otp verified
        // check user found or not
        if (otpVerification.data.userFound) {
          console.log(otpVerification.data);
          const {token} = otpVerification.data;
          const {signIn} = authContext;
          // 1) set the token to async storage
          await signIn(token);
          navigation.navigate("MainStackNavigator");
        } else if (!otpVerification.data.userFound) {
          navigation.navigate("SignupScreen1", {
            phone: otpVerification.data.phone,
          });
        }
      }
    } catch (err) {
      const {message} = err.response.data;
      setErrors([...errors, message]);
      console.log(message);
    }
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
      <Text style={styles.heading}>{`Enter the code\nwe sent to you`}</Text>
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
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {userOTP.length === 4 && (
        <TouchableOpacity style={styles.button} onPress={handleOTPVerification}>
          <Text style={styles.btnText}>Ok</Text>
        </TouchableOpacity>
      )}
      {!!errors.length && <Text style={styles.helperText}>{errors[0]}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate("EnterMobileNumberScreen")}>
        <Text style={styles.linkText}>Not your number?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileNumberVerifyScreen;

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
