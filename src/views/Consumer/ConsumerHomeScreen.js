import React from 'react';
import {ConsumerContent} from './Components/ConsumerContent';
import {ScrollView, Text, View} from 'react-native';
import {ConsumerHeader} from './Components/ConsumerHeader';

export const ConsumerHomeScreen = ({navigation}) => {
  return (
    <>
      <ConsumerHeader navigation={navigation} title="Gigs" />
      <ScrollView>
        <ConsumerContent />
      </ScrollView>
    </>
  );
};
