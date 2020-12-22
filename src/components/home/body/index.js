import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    Image
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
                }
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer1}>
                    <TextInput
                        value={this.state.mbits.trim()}
                        keyboardType="numeric"
                        placeholder="Megabits"
                        onChangeText={(a) => this.handleText(a, 1)}
                        maxLength={5}
                        style={{ borderColor: 'black', borderBottomWidth: 1 }}></TextInput>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            value={this.state.fileSize.trim()}
                            keyboardType="numeric"
                            placeholder="File Size"
                            onChangeText={(a) => this.handleText(a, 2)}
                            maxLength={20}
                            style={{ borderColor: 'black', borderBottomWidth: 1, width: '70%'}}></TextInput>

                        <Picker
                            selectedValue={this.state.sizeType}
                            style={{ height: 50, width: 90 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ sizeType: itemValue })
                            }>
                            <Picker.Item label="GB" value="GB" />
                            <Picker.Item label="MB" value="MB" />
                            <Picker.Item label="KB" value="KB" />
                        </Picker>
                        <TouchableOpacity>
                        <Image style={styles.buttonImage} source={require('downlator/src/resources/images/information.png')}></Image>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.subcontainer2}>
                    <Button title="Calculate" onPress={() => this.handleOperation()}></Button>
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
        flex: 5,
        backgroundColor: 'skyblue',

    },
    buttonImage: {
        width: 30,
        height: 30
    },
    subcontainer1: {
        flex: 1,
        justifyContent: 'space-between',
        
        padding: 10,
    },
    subcontainer2: {
        justifyContent: 'center',
        padding: 10,
        flex: 1,
        width: 105,
        alignSelf: 'center',
        
    },
    subcontainer3: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        flex: 1,
        
    }
});

export default AppBody;