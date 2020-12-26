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
                    this.setState({ timeText: horas + ' hours ' + min + ' minutes ' + seg + ' seconds approximately' })
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
                    this.setState({ timeText: horas + ' hours ' + min + ' minutes ' + seg + ' seconds approximately' })
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
                    this.setState({ timeText: horas + ' hours ' + min + ' minutes ' + seg + ' seconds approximately' })
                    Keyboard.dismiss();
                }
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fileSizeSubtitle}>Average Speed</Text>
                <TextInput
                    value={this.state.mbits.trim()}
                    keyboardType="numeric"
                    placeholderTextColor="#98A4B1"
                    color="#A1AFC3"
                    onChangeText={(a) => this.handleText(a, 1)}
                    maxLength={5}
                    elevation={2}
                    style={styles.fileSizeInput}></TextInput>

                <Text style={{
                    color: '#9BA4B0',
                    left: 25,
                    fontFamily: 'Montserrat-Bold',
                    top: 20,
                    fontSize: 20
                }}>File Size</Text>

                <View style={{ flexDirection: 'row', top: 20 }}>
                    <TextInput
                        value={this.state.fileSize.trim()}
                        keyboardType="numeric"
                        placeholderTextColor="#98A4B1"
                        color="#A1AFC3"
                        onChangeText={(a) => this.handleText(a, 2)}
                        maxLength={20}
                        elevation={2}
                        style={styles.fileSizeInput}>
                    </TextInput>

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
                <View style={styles.buttonContainer1}>
                    <TouchableOpacity onPress={() => this.handleOperation()} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>CALCULATE</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.timeText}>{this.state.timeText}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 8
    },
    fileSizeSubtitle: {
        color: '#9BA4B0',
        left: 25,
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
    buttonText: {
        fontSize: 25,
        color: "#fff",
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: "center",
        textTransform: "uppercase",
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#FF8585",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 190,
        height: 70,
        justifyContent: 'center'
    },
    timeText: {
        top: 200,
        left: 55,
        color: '#9BA4B0',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,

    },
    buttonContainer1: {
        top: 100,
        width: 190,
        height: 70,
        alignSelf: 'center'
    }
});

export default AppBody;