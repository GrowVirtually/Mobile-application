// src/views/Grower/NewGig.js

import React from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity  } from 'react-native';

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

function Orders ({navigation}) {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="My Orders" />
      <Text style={styles.text}>Orders Screen</Text>
     
   
    </View>
  );
}

const styles = StyleSheet.create({
  

});

export default Orders;