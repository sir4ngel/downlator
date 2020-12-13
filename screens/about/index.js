/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const About = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    flex: 1,
    justifyContent: "center"
  }
});

export default About;