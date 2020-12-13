import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from 'downlator/screens/home';
import AppHeader from 'downlator/src/shared/header';

export const HomeStack = ({navigation}) => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <AppHeader navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default HomeStack;