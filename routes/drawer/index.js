import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from 'downlator/screens/home';
import {DrawerContent} from 'downlator/routes/drawer/drawerContent'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function HomeS({navigation}) {
  return(
    <Home navigation={navigation} />
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />} drawerPosition="right" initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeS} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;