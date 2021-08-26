import React from 'react'
import { StyleSheet, StatusBar, Text, View,SafeAreaView } from 'react-native'

import * as Colors from '../../../styles/abstracts/colors';
import  AppHeader  from '../../Common/AppHeader';


import {GrowerMenu} from "../homeScreen/components/GrowerMenu";

export const GrowerHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>

        <StatusBar backgroundColor={Colors.primary.color} />
        <AppHeader navigation={navigation} title="Grower" />
        <GrowerMenu navigation={navigation} />




      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: Colors.primary.color,
  },
  searchbarLeft: {
    width: '80%',
  },
  searchbarRight: {
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.color,
    width: '20%',
  },  
 
  buttonContainer: {
   backgroundColor: 'black',
    flexDirection:'row',
    borderRadius: 5,
    padding: 1,
    margin: 20,
    width: 150,
    height: 150,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff'
  },
  buttonImage:{
    flex:3,
  }
});
