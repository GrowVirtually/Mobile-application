import React from 'react'
import {Text, View, StatusBar,StyleSheet, SafeAreaView,TouchableOpacity, Image} from 'react-native';



const ConsumerList = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <Text style={styles.text}>Orders Screen</Text>
       
    </View>
  );
};

export default ConsumerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

});