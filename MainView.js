import React from 'react';
import {
  Text, 
  View, 
  TextInput,
  Button,  
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import styles from './Styles';
import Header from './Header';

const NICKNAME = 'NICKNAME';
const NAME = '@jugendhackt';
const CHANNEL = 'jugendhackt';

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDT4erBl4WdLbcxSbCdG1uiKdqi0uwvauM",
      authDomain: "smile-chat-5ae9f.firebaseapp.com",
      databaseURL: "https://smile-chat-5ae9f.firebaseio.com",
      projectId: "smile-chat-5ae9f",
      storageBucket: "smile-chat-5ae9f.appspot.com",
      messagingSenderId: "259119855896"
    };
    firebase.initializeApp(config);

export default class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      newMessage: '',
      messages: [],
      loading: true,
    };





    // Get a reference to the database service
    this.firebaseRef = firebase.database().ref('messages');

    this.getMessages = this.getMessages.bind(this);
    this.saveMessages = this.saveMessages.bind(this);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }
  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    this.firebaseRef.on('value', (snapshot) => {
      const messages = snapshot.val() || [];

      this.setState({
        messages,
        loading: false,
      });
    });
  }
  saveMessages(messages) {
    this.firebaseRef.set(messages);
  }
  handleChangeText(text) {
    this.setState({
      newMessage: text,
    });
  }
  handlePress() {
    const { newMessage, messages } = this.state;

    const updatedMessages = messages.concat([newMessage]);
  if (newMessage != ""){
    this.setState({
      messages: updatedMessages,
      newMessage: '',
    }, () => this.saveMessages(updatedMessages));
  }

  }
  renderMessages() {
    const { messages } = this.state;
    if (messages.length === 0) {
      return (
      
      <View style={styles.row}>
        <View style={styles.rowText}>
          <Text style={styles.message}>No Messages Yet. Add your first one!</Text>
        </View>
      </View>
      ) 
  }
  return messages.map((message, index) => (
    
      <View style={styles.row}>
        <View style={styles.rowText}>
          <Text style={styles.nickname}> {NICKNAME} </Text>
            <Text style={styles.message}>{message}</Text>
          </View>
      </View>

    ));
  }

  render() {
    const { loading } = this.state;

    return (      
        <View style={styles.container}>
          <Header title={CHANNEL} />
            <ScrollView style={styles.messagesContainer}>
              { loading ?
                <Text> </Text>
                :
                this.renderMessages()
              }
              <Text style={{paddingBottom: 5}}></Text>
            </ScrollView>

          <KeyboardAvoidingView behavior="padding">
            <View style={styles.footer}>
              <TextInput
                value={this.state.newMessage}
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholder="Type something nice"
                onChangeText={text => this.handleChangeText(text)}
              />
              <TouchableOpacity onPress={this.handlePress} 
                      style={styles.send}>
                <Text style={styles.sendIcon}
                      y={(10 / 2) + 8}>➤</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>     
    );

  }
}
