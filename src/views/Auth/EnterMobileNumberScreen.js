import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {TextInput} from "react-native-paper";
import axios from "axios";
import {HOST_PORT} from "@env";
import * as Colors from "../../styles/abstracts/colors";

const EnterMobileNumberScreen = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState("07");
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    setDisabledNext(false);
  }, [mobileNumber]);

  const validateMobileNumber = number => {
    const allowBackspace = number.length === mobileNumber.length - 1;

    const regex = /^\d*(\.\d{0, 2})?$/; // regex validation

    if (
      (!number || allowBackspace || regex.test(number.toString())) &&
      number.length <= 10 &&
      number.length >= 2
    ) {
      setMobileNumber(number);
    }
  };

  const handleSendOTP = async () => {
    // serialize phone number
    const newMobile = mobileNumber.replace(mobileNumber.charAt(0), "+94");

    // 1. send OTP code to mobile
    try {
      // backend call to get the OTP

      const otpWithDetails = await axios.post(`${HOST_PORT}/api/v1/users/sendOTP`, {
        phone: newMobile,
      });

      console.log(otpWithDetails);
      if (otpWithDetails.data.status === "success") {
        const {otp, hash} = otpWithDetails.data;
        navigation.navigate("MobileNumberVerifyScreen", {
          phone: newMobile,
          hash,
          otp,
        });
      } else {
        alert(otpWithDetails.data.message);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`Enter your\n mobile number`} </Text>
      <Text style={styles.subHeading}>
        We will text you a verification code. Message and data rates may apply
      </Text>

      <View style={styles.btnContainer}>
        <TextInput
          label="Your mobile number"
          value={mobileNumber}
          onChangeText={validateMobileNumber}
          style={styles.textInput}
          keyboardType="numeric"
          mode="outlined"
          autoFocus
          selectionColor={Colors.secondary.color}
          theme={{
            colors: {
              primary: Colors.primary.color,
              underlineColor: "transparent",
              background: "#fff",
            },
          }}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <MaterialIcons name="arrow-back" /> */}
          <Text style={styles.linkText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PasswordLoginScreen")}>
          {/* <MaterialIcons name="arrow-back" /> */}
          <Text style={styles.linkText}>Login using your email</Text>
        </TouchableOpacity>
        {/* validate input and if there is number proceed */}
        {mobileNumber.length === 10 && (
          <TouchableOpacity
            onPress={async () => {
              setDisabledNext(true);
              await handleSendOTP();
            }}
            style={disabledNext ? styles.buttonDisabled : styles.button}
            disabled={disabledNext}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EnterMobileNumberScreen;

const {width} = Dimensions.get("screen");
const widthTextInput = width * 0.9;

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    flexDirection: "column",
  },
  // eslint-disable-next-line react-native/no-color-literals
  btnText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary.color,
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
  },
  buttonDisabled: {
    backgroundColor: "grey",
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  heading: {
    color: Colors.primary.color,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    color: Colors.secondary.color,
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  miniBtn: {
    backgroundColor: Colors.secondary.color,
    flex: 1,
    padding: 5,
  },
  subHeading: {
    color: Colors.fontColor.color,
    fontSize: 15,
    padding: 30,
    textAlign: "center",
  },
  textInput: {
    marginBottom: 20,
    width: widthTextInput,
  },
});
