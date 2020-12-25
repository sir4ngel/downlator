import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    Image,
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AppBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mbits: '',
            fileSize: '',
            horas: null,
            min: null,
            seg: null,
            auxiliar: null,
            sizeType: 'GB'
        };
    }

    handleText(n, inputN) {
        if (inputN == 1) {
            this.setState({ mbits: n });
        } else {
            this.setState({ fileSize: n });
        }
    }

    handleOperation() {
        switch (this.state.sizeType) {
            case 'GB':
                if (this.state.mbits == '' || this.state.fileSize == '') {
                    Alert.alert("Algun campo esta vacio.");
                } else if (this.state.mbits < 0 || this.state.fileSize < 0) {
                    Alert.alert("Por favor, escribe numeros positivos.");
                } else {
                    var tiempo = (this.state.fileSize * 1024) / (this.state.mbits / 8);
                    var horas1 = Math.trunc(tiempo / 3600);
                    var min1 = Math.trunc((tiempo - (horas1 * 3600)) / 60);
                    var seg1 = Math.trunc(tiempo - (horas1 * 3600 + min1 * 60));
                    this.setState({ horas: horas1, min: min1, seg: seg1 });
                    console.log(typeof this.state.mbits);
                    Keyboard.dismiss();
                }
                break;

            case 'MB':
                if (this.state.mbits == '' || this.state.fileSize == '') {
                    Alert.alert("Algun campo esta vacio.");
                } else if (this.state.mbits < 0 || this.state.fileSize < 0) {
                    Alert.alert("Por favor, escribe numeros positivos.");
                } else {
                    var tiempo = this.state.fileSize / (this.state.mbits / 8);
                    var horas1 = Math.trunc(tiempo / 3600);
                    var min1 = Math.trunc((tiempo - (horas1 * 3600)) / 60);
                    var seg1 = Math.trunc(tiempo - (horas1 * 3600 + min1 * 60));
                    this.setState({ horas: horas1, min: min1, seg: seg1 });
                    console.log(this.state.sizeType);
                    Keyboard.dismiss();
                }
                break;

            case 'KB':
                if (this.state.mbits == '' || this.state.fileSize == '') {
                    Alert.alert("Algun campo esta vacio.");
                } else if (this.state.mbits < 0 || this.state.fileSize < 0) {
                    Alert.alert("Por favor, escribe numeros positivos.");
                } else {
                    var tiempo = (this.state.fileSize / 1024) / (this.state.mbits / 8);
                    var horas1 = Math.trunc(tiempo / 3600);
                    var min1 = Math.trunc((tiempo - (horas1 * 3600)) / 60);
                    var seg1 = Math.trunc(tiempo - (horas1 * 3600 + min1 * 60));
                    this.setState({ horas: horas1, min: min1, seg: seg1 });
                    console.log(this.state.sizeType);
                    Keyboard.dismiss();
                }
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer1}>
                    <Text style={styles.fileSizeSubtitle}>File Size</Text>
                    <TextInput
                        value={this.state.fileSize.trim()}
                        keyboardType="numeric"
                        placeholderTextColor="#98A4B1"
                        color="white"
                        onChangeText={(a) => this.handleText(a, 2)}
                        maxLength={20}
                        elevation={1}
                        style={styles.fileSizeInput}>

                    </TextInput>
                    <Text style={styles.fileSizeSubtitle}>Average Speed</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            value={this.state.mbits.trim()}
                            keyboardType="numeric"
                            placeholderTextColor="#98A4B1"
                            color="white"
                            onChangeText={(a) => this.handleText(a, 1)}
                            maxLength={5}
                            elevation={1}
                            style={styles.fileSizeInput}></TextInput>
                        <View style={styles.pickerFileSize} elevation={1}>
                            <Picker
                                selectedValue={this.state.sizeType}
                                dropdownIconColor="#A1AFC3"
                                mode="dropdown"
                                style={{ color: '#9BA4B0' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ sizeType: itemValue })
                                }>
                                <Picker.Item label="GB" value="GB" />
                                <Picker.Item label="MB" value="MB" />
                                <Picker.Item label="KB" value="KB" />
                            </Picker>
                        </View>

                    </View>

                </View>
                <View style={styles.subcontainer2}>
                    <TouchableOpacity onPress={() => this.handleOperation()} style={styles.buttonContainer}>
                        <Image style={styles.mainButton} source={require('downlator/src/resources/home/assets/rectangulo14.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.subcontainer3}>
                    <Text>El tiempo de descarga es: {this.state.horas} horas {this.state.min} minutos {this.state.seg} segundos</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 8

    },
    buttonImage: {
        width: 30,
        height: 30
    },
    subcontainer1: {
        flex: 1,
        justifyContent: 'space-between',
    },
    subcontainer2: {
        flex: 1,
        justifyContent: 'center'
    },
    subcontainer3: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        flex: 1,
    },
    fileSizeSubtitle: {
        color: '#9BA4B0',
        left: 25,
        fontFamily: 'Montserrat-Bold'
    },
    fileSizeInput: {
        backgroundColor: '#EBECF0',
        borderRadius: 0,
        borderWidth: 0,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset: {
            height: 56,
            width: 13
        },
        left: 25,
        width: '60%'
    },
    pickerFileSize: {
        backgroundColor: '#EBECF0',
        height: 50,
        width: 90,
        color: '#A1AFC3',
        left: 47,
        borderRadius: 0,
        borderWidth: 0,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset: {
            height: 56,
            width: 13
        }
    },
    mainButton: {
        width: 150,
        height: 30,
        backgroundColor: 'blue',
    },
    buttonContainer: {
        width: 150,
        height: 30,
        backgroundColor: 'blue',
        alignSelf: 'center'
    }
});

export default AppBody;