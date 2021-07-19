import React from 'react';
import {Appbar} from 'react-native-paper';

export const ConsumerHeader = ({navigation, title}) => {
  return (
    <Appbar.Header style={{backgroundColor: 'green'}}>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
