import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  WebView,
  ScrollView,
  StatusBar
} from 'react-native';
import Header from './Header';
import styles from './Styles';
// import english from './guide/english.html';

const ENG = require('./guide/english.html');
const NAME = '@jugendhackt';
const CHANNEL = 'jugendhackt';

export default class WebScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header title={CHANNEL} />
        </View>
        <WebView style={styles.webview} source={{html: '<head> <style> .wrap {padding: 2px; } .emoji { font-size: 16; color: \'#696969\' } .base { background-color: \'#D7D7DB\'; } </style> </head> <body> <div class="base"> <div class="wrap"> <p class="emoji">👋 Hello or Bye</p> </div> <div class="wrap"> <p class="emoji">☀ Good morning</p> </div> <div class="wrap"> <p class="emoji">🌙 Good night</p> </div> <div class="wrap"> <p class="emoji">🙏 Thank you</p> </div> <div class="wrap"> <p class="emoji">🙇‍ I\'m sorry</p> </div> <div class="wrap"> <p class="emoji">☺️ Nice to meet you</p> </div> <div class="wrap"> <p class="emoji">👇 I\'m -</p> </div> <div class="wrap"> <p class="emoji">👆🌏 Where are you from？</p> </div> <div class="wrap"> <p class="emoji">👇1⃣5⃣ I’m 15 years old</p> </div> <div class="wrap"> <p class="emoji">👇❤️ 💬 I like to speak</p> </div> <div class="wrap"> <p class="emoji">👆❤️ What do you like to do?</p> </div> <div class="wrap"> <p class="emoji">👆🙆🙅 How are you?</p> </div> <div class="wrap"> <p class="emoji">👇😄 I’m fine</p> </div> </body>'}}/>
      </View>
    );
  }
}
