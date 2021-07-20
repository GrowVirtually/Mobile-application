import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConsumerGig} from './ConsumerGig';

const gigs = [
  {
    gigTitle: 'Pumpking / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 4,
    growerName: 'A. Dodampe',
    imgUrl: 'https://picsum.photos/200/300?random=1',
  },
  {
    gigTitle: 'Carrot / Organic',
    priceTag: 'Rs. 180 /KG',
    expireDate: 2,
    growerName: 'N. Sumana',
    imgUrl: 'https://picsum.photos/200/300?random=2',
  },
  {
    gigTitle: 'Pumpking / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 4,
    growerName: 'A. Dodampe',
    imgUrl: 'https://picsum.photos/200/300?random=3',
  },
  {
    gigTitle: 'Carrot / Organic',
    priceTag: 'Rs. 180 /KG',
    expireDate: 2,
    growerName: 'N. Sumana',
    imgUrl: 'https://picsum.photos/200/300?random=4',
  },
  {
    gigTitle: 'Pumpking / Organic',
    priceTag: 'Rs. 170 /KG',
    expireDate: 4,
    growerName: 'A. Dodampe',
    imgUrl: 'https://picsum.photos/200/300?random=5',
  },
  {
    gigTitle: 'Carrot / Organic',
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
