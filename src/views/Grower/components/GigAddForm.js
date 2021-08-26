import React from 'react';
import {Text, View, StatusBar,StyleSheet, SafeAreaView,TouchableOpacity, Image} from 'react-native';



let Form = t.form.Form;
class GigAddForm extends Component {
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

export default GigAddForm;