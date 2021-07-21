import React from 'react';
import {Appbar} from 'react-native-paper';
import * as Colors from '../../../styles/abstracts/colors'

export const ConsumerHeader = ({navigation, title, subtitle}) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: Colors.primary.color,
    elevation: 0
  },
};

ConsumerHeader.defaultProps = {
  title: 'Title',
  subtitle: '',
}