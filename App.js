/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      mbits: 0,
      fileSize: 0,
      r: 0
    };
  }

  handleText(n, inputN) {
    if(Number.isInteger(+n)){
      inputN == 1
      ? this.setState({mbits: +n})
      : this.setState({fileSize: +n});
    }
    
}

  handleOperation() {
    this.setState({r: this.state.mbits + this.state.fileSize});
  }
  render()
  {
    const {r, mbits} = this.state;
    return(
      <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text>DOWNLATOR - Logo</Text>
        </View>
        <View style={{flex: 5, backgroundColor: 'skyblue'}}>
          <View>
            <TextInput placeholder="Megabits" onChangeText={(a) => this.handleText(a, 1)} style={{borderColor: 'black', borderWidth: 1}}></TextInput>
            <TextInput placeholder="File Size" onChangeText={(a) => this.handleText(a, 2)} style={{borderColor: 'black', borderWidth: 1}}></TextInput>
            <Button title="Calculate" onPress={() => this.handleOperation()}></Button>
            <Text>El tiempo de descarga es: {this.state.r}</Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Text>Anuncios</Text>
        </View>
      </View>
      );
    }
};

const styles = StyleSheet.create({
  titles: {
    flex: 1,
    justifyContent: "center"
  }
});


export default App;