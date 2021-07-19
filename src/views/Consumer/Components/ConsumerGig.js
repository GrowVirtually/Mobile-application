import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export const ConsumerGig = () => {
  return (
    <Card style={ConsumerGigStyle.gridItem}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/200/300'}} />
    </Card>
  );
};
const ConsumerGigStyle = StyleSheet.create({
  gridItem: {
    width: '45%',
    margin: 5,
  },
});
