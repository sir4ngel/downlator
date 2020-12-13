import React from 'react';
import { StyleSheet, Image } from 'react-native';

const HeaderLogo = (props) => {
    return (
        <Image style={styles.logoContainer} source={require('downlator/src/resources/images/logo.png')}></Image>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: 50,
        height: 50
    }
});

export default HeaderLogo;