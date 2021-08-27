// src/views/Grower/NewGig.js

import React from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity, Button, ScrollView  } from 'react-native';

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

import DynamicForm from '@coffeebeanslabs/react-native-form-builder';

function NewGigScreen01 ({navigation}) {

  const formTemplate = {
    data: [
      {
        component: 'image',
        field_name: 'headerImage',
        meta: {
          label: 'alt text for header image',
          source: 'https://image.flaticon.com/icons/png/512/4944/4944728.png'
        },
        style: {
          width: 200,
          height: 200
        }
      },
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Name',
          placeholder: 'Enter name..'
        }
      },
      {
        component: 'input-date',
        field_name: 'birthDate',
        is_mandatory: 'true',
        meta: {
          title: 'Birth Date'
        }
      },
      {
        component: 'input-radio',
        field_name: 'gender',
        is_mandatory: 'true',
        meta: {
          text: 'Your Gender',
          data: [
            {
              label: 'Male',
              value: 'male'
            },
            {
              label: 'Female',
              value: 'female'
            }
          ]
        }
      },
      {
        component: 'input-dropdown',
        field_name: 'favJsFramework',
        is_mandatory: 'true',
        meta: {
          text: 'Select your favorite programming language',
          items: [
            {
              label: 'Javascript',
              value: 'js'
            },
            {
              label: 'Golang',
              value: 'golang'
            },
            {
              label: 'Python',
              value: 'python'
            },
          ]
        },
      }
    ]
  }
 
  const onSubmit = formFields => {
    // Actions on submit button click.
    navigation.navigate('GigScreen2');
    console.log('Form submitted with fields: ', formFields);
    
  }

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="Add a New Gig" />
      <ScrollView>
        <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
        
      </ScrollView>

     
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default NewGigScreen01;