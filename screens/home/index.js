/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppFooter from 'downlator/src/components/home/footer';
import AppBody from 'downlator/src/components/home/body';
import AppHeader from 'downlator/src/shared/header';

import {
  StyleSheet,
  View
} from 'react-native';

const Home = ({navigation}) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
      <AppHeader navigation={navigation} />
      <AppBody />
      <AppFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Home;