import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export const GrowerMenu = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("NewGig")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/862/862856.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />

        <Text style={styles.buttonText}>New Gig</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("MyGigs")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/3701/3701918.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>My Gigs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("FindConsumer")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/1992/1992516.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Find Consumers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Orders")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/3500/3500833.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Earnings")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/3135/3135706.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Earnings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Support")}>
        <Image
          source={{uri: "https://image.flaticon.com/icons/png/512/682/682055.png"}}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#F1F8E9",
    borderWidth: 3,
    borderColor: "#1B5E20",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "flex-start",

    margin: 10,
    width: 375,
    height: 90,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B5E20",
    marginLeft: 80,
  },
  buttonImage: {
    width: 60,
    height: 60,
    marginLeft: 20,
  },
});
