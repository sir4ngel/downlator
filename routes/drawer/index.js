import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../home-stack';
import AboutStack from '../about-stack';
import React from 'react';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home'>
    <Screen
      name='Calculator'
      component={HomeStack}
    />
    <Screen
      name='About'
      component={AboutStack}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;