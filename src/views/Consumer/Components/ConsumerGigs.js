import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConsumerGig} from './ConsumerGig';

const gigs = [
  {
    id:1,
    gigTitle: 'Pumpking / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 1,
    growerName: 'A. Dodampe',
    imgUrl: 'https://picsum.photos/200/300?random=1',
  },
  {
    id:2,
    gigTitle: 'Carrot / Organic',
    priceTag: 'Rs. 180 /KG',
    expireDate: 6,
    growerName: 'N. Sumana',
    imgUrl: 'https://picsum.photos/200/300?random=2',
  },
  {
    id:3,

    gigTitle: 'Brinjol / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 4,
    growerName: 'Sotthi Upali',
    imgUrl: 'https://picsum.photos/200/300?random=3',
  },
  {
    id:4,
    gigTitle: 'Cucumber ',
    priceTag: 'Rs. 180 /KG',
    expireDate: 2,
    growerName: 'Gotabaya Rajapasksha',
    imgUrl: 'https://picsum.photos/200/300?random=4',
  },
  {
    id:5,
    gigTitle: 'Pumpking / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 4,
    growerName: 'Amarabandu Rupasinghe',
    imgUrl: 'https://picsum.photos/200/300?random=5',
  },
  {
    id:6,
    gigTitle: 'Carrot ',
    priceTag: 'Rs. 180 /KG',
    expireDate: 2,
    growerName: 'N. Sumana',
    imgUrl: 'https://picsum.photos/200/300?random=6',
  },
];

export const ConsumerGigs = () => {
  return (
    <View style={ConsumerGigsStyle.grid}>
      {gigs.map(gig => (
        <ConsumerGig {...gig} />
      ))}
    </View>
  );
};

const ConsumerGigsStyle = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 130,
    backgroundColor: '#ddd',
  },
});
