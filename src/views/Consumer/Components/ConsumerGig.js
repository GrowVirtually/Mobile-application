import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import * as Colors from '../../../styles/abstracts/colors';

export const ConsumerGig = () => {
  return (
    <Card style={ConsumerGigStyle.gridItem}>
      <Card.Cover
        style={ConsumerGigStyle.img}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <View style={ConsumerGigStyle.cardContent}>
        <View style={ConsumerGigStyle.cardLeft}>
          <Text style={ConsumerGigStyle.gigTitle}>Brinjal / Organic</Text>
          <Text style={ConsumerGigStyle.gigSubTitle}>Rs. 150/KG</Text>
          <Text style={ConsumerGigStyle.expireTxt}>Will expire in 3 days</Text>
        </View>
        <View style={ConsumerGigStyle.cardRight}>
          <Avatar.Text
            size={24}
            label="AD"
            color="#fff"
            style={{backgroundColor: Colors.primary.color}}
          />
          <Text style={ConsumerGigStyle.avatarTxt}>A. Dodampe</Text>
        </View>
      </View>
    </Card>
  );
};
const ConsumerGigStyle = StyleSheet.create({
  gridItem: {
    width: '46%',
    margin: 5,
  },
  img: {
    height: 116,
  },
  cardContent: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {},
  cardRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gigTitle: {
    fontSize: 13,
  },
  gigSubTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  expireTxt: {
    fontSize: 10,
    color: Colors.errorColor.color,
  },
  avatarTxt: {
    fontSize: 8,
    color: Colors.fontColor.color,
  },
});
