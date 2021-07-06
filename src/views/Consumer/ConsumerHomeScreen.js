import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';

const ConsumerHeader = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Title" />
      <Appbar.Action
        icon="label"
        onPress={() => console.log('Pressed label')}
      />
    </Appbar.Header>
  );
};

const ConsumerGig = () => {
  return (
    <Card style={ConsumerGigStyle.gridItem}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    </Card>
  );
};

const ConsumerGigStyle = StyleSheet.create({
  gridItem: {
    width: 190,
    // margin:5,
    // padding:5,
    // height:150,
  },
});

const ConsumerGigs = () => {
  return (
    <View style={ConsumerGigsStyle.grid}>
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


export const ConsumerHomeScreen = () => {
  return (
    <>
      <ConsumerHeader />
      <ScrollView>
        <ConsumerContent />
      </ScrollView>
    </>
  );
};

const ConsumerContent = () => {
  return (
    <View style={style.container}>
      <ConsumerGigs />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
