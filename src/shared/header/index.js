import React from 'react';
import MenuButton from './menu-button';
import HeaderLogo from './header-logo';
import { Dimensions } from 'react-native';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const AppHeader = ({ navigation }) => {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity onPress={openMenu}>
                    <Image style={styles.buttonImage} source={require('downlator/src/resources/images/menu.png')}></Image>
                </TouchableOpacity>
            </View>
            <View>
                <HeaderLogo />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButtonContainer: {
        position: 'absolute',
        left: 16
    },
    buttonImage: {
        width: 30,
        height: 30
    }
});

export default AppHeader;