/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from "react";
import {Appbar} from "react-native-paper";
import {StatusBar} from "react-native";
import * as Colors from "../../styles/abstracts/colors";

const AppHeader = ({navigation, title, subtitle, showBackButton}) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary.color} />
      <Appbar.Header style={styles.header}>
        {showBackButton ? (
          <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
        ) : (
          <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        )}

        <Appbar.Content title={title} subtitle={subtitle} />
      </Appbar.Header>
    </>
  );
};

export default AppHeader;

const styles = {
  header: {
    backgroundColor: Colors.primary.color,
    elevation: 0,
  },
};
