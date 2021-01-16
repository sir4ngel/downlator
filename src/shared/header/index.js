import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 540;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
const AppHeader = ({ navigation }) => {

    const openMenu = () => {
        navigation.openDrawer()
    }

    function fechaHoy() {
        var fecha = new Date();
        var mes;
        switch (fecha.getMonth() + 1) {
            case 1:
                mes = "ENE";
                break;
            case 2:
                mes = "FEB";
                break;
            case 3:
                mes = "MAR";
                break;
            case 4:
                mes = "ABR";
                break;
            case 5:
                mes = "MAY";
                break;
            case 6:
                mes = "JUN";
                break;
            case 7:
                mes = "JUL";
                break;
            case 8:
                mes = "AGO";
                break;
            case 9:
                mes = "SEP";
                break;
            case 10:
                mes = "OCT";
                break;
            case 11:
                mes = "NOV";
                break;
            case 12:
                mes = "DIC";
                break;
        }
        var fechaS = mes + ' ' + fecha.getDate() + ', ' + fecha.getFullYear();
        return fechaS;
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.dateTextContainer}>
                    <Text style={styles.date}>{fechaHoy()}</Text>
                </View>
                <View style={styles.titleImageContainer}>
                    <Image style={styles.titleImage} resizeMode='contain' source={require('downlator/src/resources/home/assets/title.png')}></Image>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row'
    },
    buttonImage: {
        width: 64,
        height: 64
    },
    menuButton: {
        width: 64,
        height: 64
    },
    date: {
        color: '#9BA4B0',
        fontFamily: 'Montserrat-Bold',
        fontSize: normalize(15)
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTextContainer: {
        width: 150,
        height: 20,
        left: 25
    },
    titleImageContainer: {
        justifyContent: 'center'
    },
    titleImage: {
        width: 275,
        height: 40,
        left: 25
    }
});

export default AppHeader;