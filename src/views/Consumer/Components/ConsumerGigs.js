import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ConsumerGig} from './ConsumerGig';

export const ConsumerGigs = () => {
  return (
    <View style={ConsumerGigsStyle.grid}>
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
      <ConsumerGig />
    </View>
  );
};

const ConsumerGigsStyle = StyleSheet.create({
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
