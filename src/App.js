import React, {useEffect, useReducer, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStackNavigator from "./navigators/AuthStackNavigator";
import MainStackNavigator from "./navigators/StackNavigator";
import {createStackNavigator} from "@react-navigation/stack";
import AuthContext from "./context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Provider as PaperProvider} from "react-native-paper";
import {StoreProvider, useStore} from "./context/StoreProvider";
import {storeReducer, storeState} from "./reducers/storeReducer";
import {loginReducer, initialLoginState} from "./reducers/loginReducer";
import theme from "./styles/abstracts/theme";
import LocationSetter from "./views/LocationSetter";

const RootStack = createStackNavigator();

const App = () => {
  const [loginState, loginDispatch] = useReducer(loginReducer, initialLoginState);
  const [myLocation, setMyLocation] = useState(null);
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
        loginDispatch({type: "LOGIN", token});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }

        loginDispatch({type: "LOGOUT"});
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
    loginDispatch({type: "RETRIEVE_TOKEN", token: userToken});
  }, []);

  let globalStateObj;
  useEffect(async () => {
    let globalStateStr;
    try {
      globalStateStr = await AsyncStorage.getItem("globalState");
      globalStateObj = JSON.parse(globalStateStr);
    } catch (e) {
      console.log("GlobalState: ");
    }
  }, []);

  useEffect(() => {
    const getMyLocation = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("mylocation");
        if (jsonValue != null) {
          console.log("app location not null", jsonValue);
          const obj = JSON.parse(jsonValue);
          setMyLocation(obj);
        } else {
          console.log("app loction null");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getMyLocation();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={{authContext, loginState}}>
        <StoreProvider
          reducer={storeReducer}
          initialState={loginState.userToken ? globalStateObj : storeState}>
          <NavigationContainer>
            {loginState.userToken ? (
              <RootStack.Navigator headerMode="none">
                {myLocation === null && (
                  <RootStack.Screen name="LocationSetter" component={LocationSetter} />
                )}
                <RootStack.Screen name="MainStackNavigator" component={MainStackNavigator} />
              </RootStack.Navigator>
            ) : (
              <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
              </RootStack.Navigator>
            )}
          </NavigationContainer>
        </StoreProvider>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
