import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStackScreen from './navigators/AuthStackScreen';
import { ActivityIndicator, View } from 'react-native';
import { MainStackNavigator } from './navigators/StackNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // const authContext = React.useMemo();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={'none'}>
        <RootStack.Screen name={'AuthScreen'} component={AuthStackScreen} />
        <RootStack.Screen name={'MainStackNavigator'} component={MainStackNavigator} />
      </RootStack.Navigator>
      {/*<RootStackScreen />*/}
      {/*<Drawer.Navigator initialRouteName="Home">*/}
      {/*  <Drawer.Screen name="Home" component={MainTabScreen} />*/}
      {/*  /!*<Drawer.Screen name="Details" component={DetailsStackScreen} />*!/*/}
      {/*</Drawer.Navigator>*/}
      {/*<MainStackNavigator/>*/}
    </NavigationContainer>
  );
};

export default App;
