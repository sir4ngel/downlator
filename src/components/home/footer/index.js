import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    AdMobBanner
} from 'react-native-admob'

const AppFooter = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <AdMobBanner
                        adSize="Banner"
                        adUnitID="ca-app-pub-6250912030916850/3556538800"
                        onAdFailedToLoad={error => console.error(error)}
                    />
                </View>
            </View>
        </View>
    );
}

export default AppFooter;