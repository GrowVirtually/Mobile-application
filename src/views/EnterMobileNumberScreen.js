import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Base from '../styles/base/base';
import * as Colors from '../styles/abstracts/colors';

const EnterMobileNumberScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    signIn: true,
  });

  return (
    <View style={styles.container}>
      <Text>Enter mobile number </Text>
      <TextInput style={{
        borderWidth: 1,
      }} />
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      {/* validate input and if there is number proceed */}
      {/* if number found in db switch to login */}
      <Button title={'Next'} onPress={
        data.signIn ?
          () => navigation.navigate('LoginScreen') :
          () => navigation.navigate('SignupScreen1')
      } />
    </View>

  );

};

export default EnterMobileNumberScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: 'blue',
  },
});


