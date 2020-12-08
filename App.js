/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppHeader from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';
import {
  StyleSheet,
  View
} from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
      <AppHeader />
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

export default App;