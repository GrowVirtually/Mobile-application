import React from "react";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
// import DetailsScreen from "./DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#009387"
    },
    headerTintColor: "#fff",
    headerTintStyle: {
      fontWeight: "bold"
    }
  }}>
    <HomeStack.Screen name={"Home"} component={HomeScreen} options={{
      title: "Overview",
      headerLeft: () => (
        <Icon.Button name={"ios-menu"} size={25}
                     backgroundColor={"#009387"} onPress={() => {
          navigation.openDrawer();
        }} />
      )
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#009387"
    },
    headerTintColor: "#fff",
    headerTintStyle: {
      fontWeight: "bold"
    }
  }}>
    <DetailsStack.Screen name={"Details"} component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon.Button name={"ios-menu"} size={25}
                     backgroundColor={"#009387"} onPress={() => {
          navigation.openDrawer();
        }} />
      )
    }}/>
  </DetailsStack.Navigator>
);

export default MainTabScreen;
