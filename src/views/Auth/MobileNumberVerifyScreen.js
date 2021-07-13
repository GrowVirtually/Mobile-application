import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Base from '../../styles/base/base';
import * as Colors from '../../styles/abstracts/colors';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const MobileNumberVerifyScreen = ({navigation, route}) => {
  const CELL_COUNT = 4;

  const [userOTP, setValue] = useState('');
  const ref = useBlurOnFulfill({userOTP, cellCount: CELL_COUNT});
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
    if (userOTP * 1 === route.params.systemOTP * 1) {
      navigation.navigate('SignupScreen1');
    }
  }, [userOTP]);

  return (
    <View style={styles.container}>
      <Image
        animation={'bounceIn'}
        duration={1500}
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode={'stretch'}
      />
      <Text style={styles.heading}>{`Enter the code\nwe sent to you`}</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={userOTP}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('EnterMobileNumberScreen')}>
        <Text style={styles.linkText}>Not your number?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileNumberVerifyScreen;

const styles = StyleSheet.create({
  container: {
    ...Base.container,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: Colors.secondary.color,
    borderWidth: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary.color,
    marginBottom: 10,
  },
  logo: {
    ...Base.logoLarge,
    // width:'100%',
  },
  linkText: {
    fontSize: 14,
    color: Colors.secondary.color,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
});
