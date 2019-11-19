import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './compoenets/screens/HomeScreen';
import * as Font from 'expo-font';

class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-blackitalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
      'roboto-bolditalic': require('./assets/fonts/Roboto-BoldItalic.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded && <HomeScreen />}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
