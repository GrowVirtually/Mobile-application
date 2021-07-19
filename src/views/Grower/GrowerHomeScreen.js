import React from 'react';
import {Text, View, StatusBar,StyleSheet} from 'react-native';
import {ConsumerContent} from './Components/ConsumerContent';
import {ConsumerHeader} from './Components/ConsumerHeader';
import * as Colors from '../../styles/abstracts/colors';

export const GrowerHomeScreen = ({navigation}) => {
  return (
    <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <ConsumerHeader navigation={navigation} title="Grower" />
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