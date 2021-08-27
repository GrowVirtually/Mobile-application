// src/views/Grower/NewGig.js

import React from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity, Button  } from 'react-native';

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

function GigScreen2 ({navigation}) {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="My Support" />
      <Text style={styles.text}>Next Screen</Text>
     
      <Button
        accessibilityLabel="submit-button"
        title="Back"
        buttonStyle={styles.button}
  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: '40%',
    alignSelf: 'center',
    margin: 20
  }

});

export default GigScreen2;