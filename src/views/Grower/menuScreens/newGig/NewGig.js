// src/views/Grower/NewGig.js

import React, { Component  } from 'react';
import { StyleSheet, View, Text,StatusBar, TouchableOpacity,ToastAndroid  } from 'react-native';

import t from 'tcomb-form-native'

import * as Colors from '../../../../styles/abstracts/colors';
import  AppHeader  from '../../../Common/AppHeader';

let Form = t.form.Form;
class NewGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        surname: '',
        age: 0,
        rememberMe: false,
       
      },
    };

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm() {
    var value = this.refs.gigForm.getValue();
    if (value) {
      // if validation fails, value will be null
      // console.log(value);
      ToastAndroid.show('Validation successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please fix errors', ToastAndroid.SHORT);
    }
  }

  render() {
    let gigForm = t.struct({
    
      category: t.enums({M: 'Organic', F: 'Female'}, 'gender'),
      gender: t.enums({M: 'Male', F: 'Female'}, 'gender'),
    });

    let options = {
      fields: {
        
        category: {
          label: 'Select Category',
          disabled: false,
        },
      },
    };

    return (
      <View>
       <StatusBar backgroundColor={Colors.primary.color} />
       <AppHeader navigation={this.props.navigation} title="Add new Gig" />
        <Form
          ref='gigForm'
          type={gigForm}
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
export default NewGig;