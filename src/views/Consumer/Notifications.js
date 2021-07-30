import * as React from 'react';
import {Button, View, Text} from 'react-native';
import { AppHeader } from '../Common/AppHeader';

export const Notifications = ({navigation, title}) => {
  return (
    <View>
      <AppHeader navigation={navigation} title="Notifications" />
      <Text>Notificatins</Text>
    </View>
  );
};
