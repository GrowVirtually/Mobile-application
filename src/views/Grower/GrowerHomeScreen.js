import React from 'react';
import {Text, View, StatusBar,StyleSheet, TouchableOpacity} from 'react-native';
import * as Colors from '../../styles/abstracts/colors';
import  AppHeader  from '../Common/AppHeader';

export const GrowerHomeScreen = ({navigation}) => {
  return (
    <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="Grower" />


       <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("NewGig")}>
      
        <Text style={styles.buttonText}>New Gig</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('MyGigs')}
      >
        <Text style={styles.buttonText}>My Gigs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('FindConsumer')}
      >
        <Text style={styles.buttonText}>Find Consumers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={styles.buttonText}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Earnings')}
      >
        <Text style={styles.buttonText}>Earnings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Support')}
      >
        <Text style={styles.buttonText}>Support</Text>
      </TouchableOpacity>

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
 
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});