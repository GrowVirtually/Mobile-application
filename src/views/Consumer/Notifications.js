import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {ConsumerHeader} from './ConsumerHomeScreen';

export const Notifications = ({navigation}) => {
  return (
    <View>
      <ConsumerHeader navigation={navigation}/>
      <Text>Notificatins</Text>
    </View>
  );
};
