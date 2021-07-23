import React from 'react';
import {Text, View, StatusBar,StyleSheet, Button} from 'react-native';
import {ConsumerContent} from './Components/ConsumerContent';
import {GrowerHeader} from './Components/GrowerHeader';

import * as Colors from '../../styles/abstracts/colors';





export const GrowerHomeScreen = ({navigation}) => {
  return (
    <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <GrowerHeader navigation={navigation} title="Grower" />
      
       <Text>Grower Dashboard</Text>

       <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
        onPress={() => navigation.navigate("AddGig")}
      />
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  searchbarContainer: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: Colors.primary.color,
  },
 
});