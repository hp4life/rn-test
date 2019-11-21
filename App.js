import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
// import * as Font from 'expo-font';

class App extends Component {
  // state = {
  //   fontLoaded: false,
  //   screenWidth: '',
  //   screenHeight: ''
  // };

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  //     'roboto-blackitalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
  //     'roboto-bolditalic': require('./assets/fonts/Roboto-BoldItalic.ttf')
  //   });

  //   this.setState({ fontLoaded: true });
  // }

  render() {
    console.log(Dimensions.get('window').height);
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
