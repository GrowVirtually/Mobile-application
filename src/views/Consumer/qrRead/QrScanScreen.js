import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import AppHeader from "../../Common/AppHeader";
import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";

const QrScanScreen = ({navigation}) => {
  const [viewFocused, setViewFocused] = useState(true);
  const onSuccess = e => {
    console.log(e.data);
    Alert.alert("Successful Scan", `QR DATA: ${e.data}`, [
      {text: "OK", onPress: () => console.log("OK Pressed")},
    ]);
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setViewFocused(true);
    });

    navigation.addListener("blur", () => {
      setViewFocused(false);
    });
  }, []);

  const handleActive = () => {};

  return (
    <>
      <AppHeader navigation={navigation} title="Gigs" />

      {/* <View>
        <Text>Scan QR</Text>
      </View> */}

      <QRCodeScanner
        onRead={onSuccess}
        // reactivate={handleActive}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={<Text style={styles.centerText}>Scan the buyer's QR code</Text>}
        showMarker={true}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </>
  );
};

export default QrScanScreen;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 20,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});
