import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'globalthis/implementation';
import * as Colors from '../../../styles/abstracts/colors'

export const ConsumerHeader = ({navigation, title}) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: Colors.primary.color,
    elevation: 0
  },
};
