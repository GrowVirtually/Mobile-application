import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button title={"Click Here"}
              onPress={() => alert("button clicked")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
