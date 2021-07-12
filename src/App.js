import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStackScreen from "./navigators/AuthStackScreen";
import { ActivityIndicator, View } from "react-native";
import { MainStackNavigator } from "./navigators/StackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "./context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const App = () => {

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null
  // };
  //
  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case "RETRIEVE_TOKEN":
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false
  //       };
  //     case "LOGIN":
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false
  //       };
  //     case "LOGOUT":
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false
  //       };
  //     case "REGISTER":
  //       return {
  //         ...prevState,
  //         isLoading: false
  //       };
  //   }
  // };
  //
  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  //
  const authContext = React.useMemo(() => ({
    // signIn: async (userName, password) => {
    //   // setUserToken("gdfs");
    //   // setIsLoading(false);
    //   let userToken = null;
    //
    //   if (userName === "user" && password === "pass") {
    //     userToken = "dfdfg";
    //     try {
    //       await AsyncStorage.setItem('userToken', userToken);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    //   dispatch({ type: "LOGIN", id: userName, token: userToken });
    // },
    // signOut: async () => {
    //   // setUserToken(null);
    //   // setIsLoading(false);
    //   try {
    //     await AsyncStorage.removeItem('userToken')
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   dispatch({ type: "LOGOUT" });
    // },
    // signUp: () => {
    //   // setUserToken("gdfs");
    //   // setIsLoading(false);
    // }
  }), []);
  //
  // useEffect(() => {
  //   setTimeout(async () => {
  //     // setIsLoading(false);
  //     let userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken')
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
  //   }, 1000);
  // }, []);

  // if (loginState.isLoading) {
  //   return (
  //     <View style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center"
  //     }}>
  //       <ActivityIndicator size={"large"} />
  //     </View>
  //   );
  // }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator headerMode={"none"}>
          {/*{!!loginState.userToken ?*/}
          {false ?
            (<RootStack.Screen name={"MainStackNavigator"}
                               component={MainStackNavigator} />)
            :
            (<RootStack.Screen name={"AuthScreen"}
                               component={AuthStackScreen} />)
          }
        </RootStack.Navigator>
        {/*<RootStackScreen />*/}
        {/*<Drawer.Navigator initialRouteName="Home">*/}
        {/*  <Drawer.Screen name="Home" component={MainTabScreen} />*/}
        {/*  /!*<Drawer.Screen name="Details" component={DetailsStackScreen} />*!/*/}
        {/*</Drawer.Navigator>*/}
        {/*<MainStackNavigator/>*/}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
