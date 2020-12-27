import React from 'react';
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

    function fechaHoy() {
        var fecha = new Date();
        var mes;
        switch (fecha.getMonth() + 1) {
            case 1:
                mes = "JAN";
                break;
            case 2:
                mes = "FEB";
                break;
            case 3:
                mes = "MAR";
                break;
            case 4:
                mes = "APR";
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
                mes = "AUG";
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
                mes = "DEC";
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
                <View style={styles.titleTextContainer}>
                    <Text style={styles.title}>Download Calculator</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
                    <Image style={styles.buttonImage} source={require('downlator/src/resources/home/assets/grupo5.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
    },
    buttonImage: {
        width: 64,
        height: 64
    },
    menuButton: {
        width: 64,
        height: 64
    },
    title: {
        color: '#FF8585',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30
    },
    date: {
        color: '#9BA4B0',
        fontFamily: 'Montserrat-Medium'
    },
    textContainer: {
        flex: 4,
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
    titleTextContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 310
    }
});

export default AppHeader;