import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStackScreen from "./navigators/AuthStackScreen";
import { MainStackNavigator } from "./navigators/StackNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "./context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const App = () => {

  const initialLoginState = {
    isLoading: true,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (token) => {
      if (token) {
        try {
          await AsyncStorage.setItem("userToken", token);
        } catch (e) {
          console.log(e);
        }
      }
      dispatch({ type: "LOGIN", token });
      // navigation.navigate("SignUpPathDeciderScreen");
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "LOGOUT" });
    },
  }), []);

  useEffect(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
  }, []);

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
    <AuthContext.Provider value={{ authContext }}>
      <NavigationContainer>
        <RootStack.Navigator headerMode={"none"}>
          {!!loginState.userToken ?
            (<RootStack.Screen name={"MainStackNavigator"}
                               component={MainStackNavigator} />)
            :
            (<RootStack.Screen name={"AuthScreen"}
                               component={AuthStackScreen} />)
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
