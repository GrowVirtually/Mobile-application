import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const MobileNumberVerifyScreen = ({ navigation }) => {

  const [OTP, setValue] = useState('');
  const ref = useBlurOnFulfill({ OTP, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    OTP,
    setValue,
  });
  const [userFound, setUserFound] = useState(false);
  const [verificationCode, setVerificationCode] = useState(2003);

  const CELL_COUNT = 4;

  useEffect(() => {
    /*
      1. api call to load user if exists
      2. update userFound state
     */
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Enter the code \n we sent to you`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={OTP}
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
      {/*<Button title={'Next'} onPress={*/}
      {/*  data.signIn ?*/}
      {/*    () => navigation.navigate('LoginScreen') :*/}
      {/*    () => navigation.navigate('SignupScreen1')*/}
      {/*} />*/}
      {OTP * 1 === verificationCode && (userFound ?
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