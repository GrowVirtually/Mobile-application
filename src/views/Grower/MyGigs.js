// src/views/Grower/NewGig.js

import React, { Component } from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity,ToastAndroid  } from 'react-native';

import t from 'tcomb-form-native'

import * as Colors from '../../styles/abstracts/colors';
import  AppHeader  from '../Common/AppHeader';

let Form = t.form.Form;
class MyGigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: 'First',
        surname: 'Last',
        age: 25,
        rememberMe: true,
      },
    };

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm() {
    var value = this.refs.personForm.getValue();
    if (value) {
      // if validation fails, value will be null
      // console.log(value);
      ToastAndroid.show('Validation successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please fix errors', ToastAndroid.SHORT);
    }
  }

  render() {
    let PersonModel = t.struct({
      name: t.String, // a required string
      surname: t.maybe(t.String), // an optional string
      age: t.Number, // a required number
      rememberMe: t.Boolean, // a boolean
      gender: t.enums({M: 'Male', F: 'Female'}, 'gender'),
    });

    let options = {
      fields: {
        name: {
          label: 'First Name',
          help: 'Must be less than 20 characters',
        },
        age: {
          editable: true,
        },
        rememberMe: {
          disabled: false,
        },
        gender: {
          disabled: false,
        },
      },
    };

    return (
      <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={this.props.navigation} title="Add new Gig" />
        <Form
          ref='personForm'
          type={PersonModel}
          options={options}
          value={this.state.value}
          //   onChange={{}}
        />
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
export default MyGigs;