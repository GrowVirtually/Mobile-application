import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/core';
import {ConsumerHomeScreen} from '../views/Consumer/ConsumerHomeScreen';
import {Notifications} from '../views/Consumer/Notifications';
import {GrowerHomeScreen} from '../views/Grower/GrowerHomeScreen';
import {GrowerOther} from '../views/Grower/GrowerOther';

import ConsumerDrawer from './ConsumerDrawer';

const Drawer = createDrawerNavigator();

function ConsumerDrawerNavigator() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={ConsumerDrawer}
      navigation={navigation}
      drawerStyle={{backgroundColor: 'green'}}>
      <Drawer.Screen name={'ConsumerHome'} component={ConsumerHomeScreen} />
      <Drawer.Screen name={'Notifications'} component={Notifications} />
    </Drawer.Navigator>
  );
}

function GrowerDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'GrowerHome'} component={GrowerHomeScreen} />
      <Drawer.Screen name={'GrowerOther'} component={GrowerOther} />
    </Drawer.Navigator>
  );
}

export {ConsumerDrawerNavigator, GrowerDrawerNavigator};
