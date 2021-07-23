import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator";
import MainStackNavigator from "./navigators/StackNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import AuthContext from "./context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootStack = createStackNavigator();

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(
    () => ({
      signIn: async token => {
        if (token) {
          try {
            await AsyncStorage.setItem("userToken", token);
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: "LOGIN", token});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({type: "LOGOUT"});
      },
    }),
    [],
  );

  useEffect(async () => {
    let userToken = null;
    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {
      console.log(e);
    }
    dispatch({type: "RETRIEVE_TOKEN", token: userToken});
  }, []);

  return (
    <AuthContext.Provider value={{authContext}}>
      <NavigationContainer>
        {!!loginState.userToken ? (
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="MainStackNavigator" component={MainStackNavigator} />
          </RootStack.Navigator>
        ) : (
          <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
          </RootStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
