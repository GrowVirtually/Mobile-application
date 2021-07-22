import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ConsumerDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={cusomDrawerStyle.header}>
        <Avatar.Text
          size={64}
          label="DD"
          style={{backgroundColor: 'white', color: 'green'}}
        />
        <Text style={cusomDrawerStyle.txt}>Dimuthu Dhanushka</Text>
      </SafeAreaView>

      {/* Default items */}
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="home" color="white" size={24} />
        )}
        label={() => <Text style={cusomDrawerStyle.menuTxt}>Gigs</Text>}
        onPress={() => props.navigation.navigate('ConsumerHome')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="bell" color="white" size={24} />
        )}
        label={() => (
          <Text style={cusomDrawerStyle.menuTxt}>Notifications</Text>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <View style={cusomDrawerStyle.divider} />

      <DrawerItem
        icon={({color, size}) => (
          <MaterialCommunityIcons name="logout" color="white" size={24} />
        )}
        label={() => <Text style={cusomDrawerStyle.menuTxt}>Log out</Text>}
        onPress={() => props.navigation.navigate('SignInScreen')}
      />
    </DrawerContentScrollView>
  );
}

const cusomDrawerStyle = StyleSheet.create({
  header: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  txt: {
    marginTop: 15,
    color: 'white',
  },
  menuTxt: {color: 'white', fontSize: 18},
  divider: {
    backgroundColor: 'lightgray',
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ConsumerDrawer;
