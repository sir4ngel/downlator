import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from 'downlator/screens/about';
const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{ title: 'About - Downlator' }}
    />
  </Navigator>
);

export default AboutStack;