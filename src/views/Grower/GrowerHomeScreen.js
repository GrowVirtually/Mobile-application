import React from 'react';
import {Text, View, StatusBar,StyleSheet} from 'react-native';
import * as Colors from '../../styles/abstracts/colors';
import { AppHeader } from '../Common/AppHeader';

export const GrowerHomeScreen = ({navigation}) => {
  return (
    <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="Grower" />
    </View>
  );
};

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
});