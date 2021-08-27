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
          source: 'https://image.flaticon.com/icons/png/512/2689/2689417.png'
        },
        style: {
          width: 200,
          height: 200
        }
      },
     
      {
        component: 'input-dropdown',
        field_name: 'category',
        is_mandatory: 'true',
        meta: {
          text: 'Select Category',
          items: [
            {
              label: 'Vegetables',
              value: 'vegetables'
            },
            {
              label: 'Fruits',
              value: 'fruits'
            },
            {
              label: 'Other',
              value: 'other'
            },
           
          ]
        },
      },

      {
        component: 'input-dropdown',
        field_name: 'type',
        is_mandatory: 'true',
        meta: {
          text: 'Select Type',
          items: [
            {
              label: 'Organic',
              value: 'organic'
            },
            {
              label: 'Inorganic',
              value: 'inorganic'
            },
            {
              label: 'Other',
              value: 'other'
            },
           
          ]
        },
      },

      {
        component: 'input-dropdown',
        field_name: 'commodity',
        is_mandatory: 'true',
        meta: {
          text: 'Name of the Commodity',
          items: [
            {
              label: 'Pumpkin',
              value: 'pumpkin'
            },
            {
              label: 'Bitter Guard',
              value: 'bitterGuard'
            },
            {
              label: 'Brinjal',
              value: 'brinjal'
            },

            
           
          ]
        },
      },

      
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