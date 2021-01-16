import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    AdMobBanner
} from 'react-native-admob'
import { SafeAreaView } from 'react-native-safe-area-context';

const AppFooter = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AdMobBanner
                    adSize="Banner"
                    adUnitID="ca-app-pub-6250912030916850/3556538800"
                    onAdFailedToLoad={error => console.error(error)}
                />
            </SafeAreaView>
        </View>
    );
}

export default AppFooter;