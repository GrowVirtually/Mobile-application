import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';

import AuthContext from '../../context/auth-context';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const MobileNumberVerifyScreen = ({ navigation, route }) => {

  const CELL_COUNT = 4;

  const [userOTP, setValue] = useState('');
  const ref = useBlurOnFulfill({ userOTP, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    userOTP,
    setValue,
  });
  const [userFound, setUserFound] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);

  useEffect(() => {
    /*
      1. api call to load user if exists
      2. update userFound state
     */
  }, []);

  useEffect(() => {
    alert(route.params.systemOTP);
    if (userOTP * 1 === route.params.systemOTP) {
      setCodeVerified(true);
    }
  }, [userOTP]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Enter the code \n we sent to you`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={userOTP}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button title={'Not your number?'} onPress={() => navigation.navigate('EnterMobileNumberScreen')} />
      {codeVerified && (userFound ?
        navigation.navigate('HomeScreen') :
        navigation.navigate('SignupScreen1'))
      }
    </View>
  );
};

export default MobileNumberVerifyScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: 'blue',
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
