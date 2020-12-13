import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.buttonImage} source={require('downlator/src/resources/images/menu.png')}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonImage: {
        width: 30,
        height: 30
    }
});

export default MenuButton;