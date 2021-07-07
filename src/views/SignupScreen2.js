import React from 'react';
import { Button, Text, View } from 'react-native';

const SignupScreen2 = ({ navigation }) => {

  return (
    <View>
      <Text>Signup 2 screen</Text>
      <Button title={'Back'}
              onPress={() => navigation.goBack()} />
      <Button title={'Go to path decider'}
              onPress={() => navigation.navigate('SignUpPathDeciderScreen')} />
    </View>
  );


};

export default SignupScreen2;
