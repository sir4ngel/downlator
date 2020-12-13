import React from 'react';
import MenuButton from './menu-button';
import HeaderLogo from './header-logo';
import { Dimensions } from 'react-native';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const AppHeader = ({navigation}) => {

    const openMenu = () => {
        navigation.openDrawer()
      }

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <MenuButton onPress={openMenu}/>
            </View>
            <View>
                <HeaderLogo />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: '100%',
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButtonContainer: {
        position: 'absolute',
        left: 16
    }
});

export default AppHeader;