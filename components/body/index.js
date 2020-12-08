import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';

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
            sizeType: null
        };
    }

    handleText(n, inputN) {
        if (inputN == 1) {
            this.setState({ mbits: n.replace(/\s/g, '') });
            //this.setState({mbits: parseFloat(n)});
        } else {
            this.setState({ fileSize: n.replace(/\s/g, '') });
            //this.setState({fileSize: parseFloat(n)});
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
            <View style={{ flex: 5, backgroundColor: 'skyblue' }}>
                <View>
                    <TextInput value={this.state.mbits.toString().trim()} keyboardType="numeric" placeholder="Megabits" onChangeText={(a) => this.handleText(a, 1)} style={{ borderColor: 'black', borderWidth: 1 }}></TextInput>
                    <TextInput value={this.state.fileSize.toString().trim()} keyboardType="numeric" placeholder="File Size" onChangeText={(a) => this.handleText(a, 2)} style={{ borderColor: 'black', borderWidth: 1 }}></TextInput>
                    <Picker
                        selectedValue={this.state.sizeType}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ sizeType: itemValue })
                        }>
                        <Picker.Item label="GB" value="GB" />
                        <Picker.Item label="MB" value="MB" />
                        <Picker.Item label="KB" value="KB" />
                    </Picker>
                    <Button title="Calculate" onPress={() => this.handleOperation()}></Button>
                    <Text>El tiempo de descarga es: {this.state.horas} horas {this.state.min} minutos {this.state.seg} segundos</Text>
                </View>
            </View>
        );
    }
};

export default AppBody;