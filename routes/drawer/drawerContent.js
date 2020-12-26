import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export function DrawerContent(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={styles.container}>
            <Text style={styles.textVersion}>Version 0.0.1</Text>
            <Text style={styles.darkModeText}>Dark Mode</Text>
            <Switch disabled={true} style={styles.toggleButton} onValueChange={toggleSwitch} value={isEnabled}></Switch>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textVersion: {
        alignSelf: 'center',
        fontFamily: 'Montserrat-Bold'
    },
    toggleButton: {
        alignSelf: 'center',
        top: 10
    },
    darkModeText: {
        alignSelf: 'center',
        fontFamily: 'Montserrat-Bold',
        top: 10
    }
});