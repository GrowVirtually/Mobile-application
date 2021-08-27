// src/views/Grower/NewGig.js

import React from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity, Button  } from 'react-native';

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

import DynamicForm from '@coffeebeanslabs/react-native-form-builder';

function OrdersScreen ({navigation}) {

  const formTemplate = {
    data: [
      {
        component: 'image',
        field_name: 'headerImage',
        meta: {
          label: 'alt text for header image',
          source: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
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
    console.log('Form submitted with fields: ', formFields);
  }

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={navigation} title="My Orders" />
      <Text style={styles.text}>Orders Screen</Text>
      <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
     
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default OrdersScreen;