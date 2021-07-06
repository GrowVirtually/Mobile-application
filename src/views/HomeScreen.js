import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>I am a</Text>
      </View>
      <View style={styles.row}>
        <View style={(styles.left, styles.btn)}>
          <TouchableOpacity onPress={() => navigation.navigate('ConsumerHome')}>
            <Text style={styles.btnText}>Consumer</Text>
          </TouchableOpacity>
        </View>
        <View style={(styles.right, styles.btn)}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.btnText}>Grower</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  left: {},
  btn: {
    backgroundColor: 'green',
    padding: 20,
    margin: 5,
  },
  btnText: {
    fontSize: 30,
  }
});
