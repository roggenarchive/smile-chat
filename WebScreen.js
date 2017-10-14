import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  StatusBar
} from 'react-native';
import Header from './Header';


const NAME = '@jugendhackt';
const CHANNEL = 'jugendhackt';

export default class WebScreen extends React.Component {
  render() {
    return (
      
      <View>
        <Header title={CHANNEL} />

        <WebView source={{uri: 'https://github.com/facebook/react-native'}} />
      </View>
    );
  }
}
