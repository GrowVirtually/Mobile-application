// src/views/Grower/NewGig.js

import React from 'react';
import { StyleSheet, View, Text,StatusBar, Button, TextInput  } from 'react-native';
import * as Colors from '../../styles/abstracts/colors';
import  AppHeader  from '../Common/AppHeader';

import { Formik} from 'formik';

export default function NewGig ({navigation}) {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="Add new Gig" />
      
      <Text style={styles.text}>Create New Gig Screen</Text>
      <Formik
        initialValues={{ title: '', body: '', rating:''}}
        onSubmit={(values) => {
          console.log(values);

        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              multiline
              style={styles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              style={styles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />  
            <Button title='submit' color='maroon' onPress={props.handleSubmit}/>

          </View>
        )}

      </Formik>
      
     
   
    </View>
  );
}



const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius:6,
  }

});