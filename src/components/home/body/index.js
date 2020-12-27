import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AppBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mbits: '',
            fileSize: '',
            timeText: null,
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
                    var horas = Math.trunc(tiempo / 3600);
                    var min = Math.trunc((tiempo - (horas * 3600)) / 60);
                    var seg = Math.trunc(tiempo - (horas * 3600 + min * 60));
                    this.setState({ timeText: horas + ' h ' + min + ' m ' + seg + ' s' })
                    Keyboard.dismiss()
                }
                break;

            case 'MB':
                if (this.state.mbits == '' || this.state.fileSize == '') {
                    Alert.alert("Algun campo esta vacio.");
                } else if (this.state.mbits < 0 || this.state.fileSize < 0) {
                    Alert.alert("Por favor, escribe numeros positivos.");
                } else {
                    var tiempo = this.state.fileSize / (this.state.mbits / 8);
                    var horas = Math.trunc(tiempo / 3600);
                    var min = Math.trunc((tiempo - (horas * 3600)) / 60);
                    var seg = Math.trunc(tiempo - (horas * 3600 + min * 60));
                    this.setState({ timeText: horas + ' hours ' + min + ' minutes ' + seg + ' seconds' })
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
                    var horas = Math.trunc(tiempo / 3600);
                    var min = Math.trunc((tiempo - (horas * 3600)) / 60);
                    var seg = Math.trunc(tiempo - (horas * 3600 + min * 60));
                    this.setState({ timeText: horas + ' hours ' + min + ' minutes ' + seg + ' seconds' })
                    Keyboard.dismiss();
                }
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer1}>
                    <View style={{ flex: 3, left: 25, justifyContent: 'space-around', flexDirection: 'column' }}>
                        <Text style={styles.fileSizeSubtitle}>Average Speed</Text>
                        <TextInput
                            value={this.state.mbits.trim()}
                            keyboardType="numeric"
                            placeholderTextColor="#98A4B1"
                            color="#A1AFC3"
                            onChangeText={(a) => this.handleText(a, 1)}
                            maxLength={5}
                            elevation={2}
                            fontSize={20}
                            style={styles.fileSizeInput}></TextInput>
                        <Text style={{
                            color: '#9BA4B0',
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 20
                        }}>File Size</Text>
                        <TextInput
                            value={this.state.fileSize.trim()}
                            keyboardType="numeric"
                            placeholderTextColor="#98A4B1"
                            color="#A1AFC3"
                            onChangeText={(a) => this.handleText(a, 2)}
                            maxLength={20}
                            elevation={2}
                            fontSize={20}
                            style={styles.fileSizeInput}>
                        </TextInput>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={styles.pickerFileSize} elevation={2}>
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
                <View style={styles.subContainer2}>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity onPress={() => this.handleOperation()} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.subContainer3}>
                    <View style={styles.textTimeContainer}>
                        <Text style={styles.timeText}>{this.state.timeText}</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
        justifyContent: 'space-between'
    },
    fileSizeSubtitle: {
        color: '#9BA4B0',
        fontSize: 20,
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
        width: '80%'
    },
    pickerFileSize: {
        backgroundColor: '#EBECF0',
        height: 50,
        width: 90,
        color: '#A1AFC3',
        borderRadius: 0,
        borderWidth: 0,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        shadowOffset: {
            height: 56,
            width: 13
        },
        bottom: 5,
        right: 10
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        fontFamily: 'Montserrat-SemiBold',
        textTransform: "uppercase",
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#FF8585",
        borderRadius: 10,
        width: 190,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeText: {
        color: '#9BA4B0',
        fontFamily: 'Montserrat-Bold',
        fontSize: 25
    },
    buttonContainer1: {
        width: 190,
        height: 70,
    },
    subContainer1: {
        flex: 1,
        flexDirection: 'row',
    },
    subContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTimeContainer: {
        width: 370,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AppBody;