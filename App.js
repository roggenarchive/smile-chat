import React from 'react';
import {
  Text, 
  View, 
  TextInput,
  Button, 
  StatusBar, 
  ScrollView,
  Image, 
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import firebase from 'firebase';

import Header from './Header';

const NAME = '@jugendhackt';
const CHANNEL = 'Random';
const AVATAR =
  'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newMessage: '',
      messages: [],
      typing: '',
      messages: [],
      loading: true,
    };

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

    this.setState({
      messages: updatedMessages,
      newMessage: '',
    }, () => this.saveMessages(updatedMessages));
  }

  renderMessages() {
    const { messages } = this.state;
    if (messages.length === 0) {
      return <Text>No Messages Yet. Add your first one!</Text>
    }

    return messages.map((message, index) => (
      <View style={styles.row}>
        <View style={styles.rowText}>
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
            <TouchableOpacity onPress={this.sendMessage}>
              <Button                
                style={styles.send}
                title={'SEND'}
                onPress={this.handlePress}
              /> 
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  rowText: {
    flex: 1
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: 'transparent',    
    padding: 10
  },  
  input: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderColor: '#ccc',    
    fontSize: 18,
    paddingLeft: 10,
    borderRadius: 45,
    borderWidth: 0.4,
    flex: 1
  }, 
  send: {
    alignSelf: 'center',
    color: '#ffcc36',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
    borderRadius: 45,
    borderWidth: 1
  },  
  messagesContainer: {
    borderColor: '#fff',
    alignSelf: 'stretch',
    padding: 10
  },
});

  

/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! You</Text>
      </View>
    );
  }
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/