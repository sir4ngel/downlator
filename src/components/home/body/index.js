import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    TouchableOpacity,
    Image
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
            this.setState({ mbits: n });
            //this.setState({mbits: parseFloat(n)});
        } else {
            this.setState({ fileSize: n });
            //this.setState({fileSize: parseFloat(n)});
            //<Button title="Calculate" onPress={() => this.handleOperation()}></Button>
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
                <View style={{ 
                    padding: 10}}>
                    <TextInput
                        value={this.state.mbits.trim()}
                        keyboardType="numeric"
                        placeholder="Megabits"
                        onChangeText={(a) => this.handleText(a, 1)}
                        style={{ borderColor: 'black', borderWidth: 1 }}></TextInput>

                    <TextInput
                        value={this.state.fileSize.trim()}
                        keyboardType="numeric"
                        placeholder="File Size"
                        onChangeText={(a) => this.handleText(a, 2)}
                        style={{ borderColor: 'black', borderWidth: 1 }}></TextInput>

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
                </View>
                <View style={{
                    alignSelf: 'center',
                    padding: 10
                }}>
                    <TouchableOpacity onPress={() => this.handleOperation()}>
                        <Image style={styles.buttonImage} source={require('downlator/src/resources/images/menu.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignSelf: 'center', padding: 10 }}>
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
        justifyContent: 'space-between'
    },
    buttonImage: {
        width: 30,
        height: 30
    }
});

export default AppBody;