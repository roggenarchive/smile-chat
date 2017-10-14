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
} from 'react-native'
import {
   DrawerNavigator 
} from 'react-navigation';
import MainView from './MainView';

function hashCode(str) { // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export default StyleSheet.create({ 
    container: {      
      flex: 1,
      backgroundColor: '#D7D7DB'
    },
    row: {
      flexDirection: 'column',
      flex: 2,
      paddingBottom: 4,
    },
    nickname: {
      flexDirection: 'column',
      flex: 1,
      fontWeight: 'bold',
      marginLeft: 5,
      marginTop: 5,
      color: intToRGB(hashCode(MainView.NNICKNAME)),
    },
    message: {
      fontSize: 16,
      color: '#696969',
      marginLeft: 9,
    }, 
    rowText: {
      paddingLeft: 3,
      flex: 1,      
      backgroundColor: '#fff',
      borderColor: '#ccc', 
      borderRadius: 20, 
      borderWidth: 0.4,
      paddingBottom: 3
    },
    avatar: {
      borderRadius: 20,
      width: 40,
      height: 40,
      marginRight: 10
    },
    webview: {
      height: 30,
      margin: 0,
      flex: 1,
      margin: 5,
      paddingBottom: 5,
      marginRight: 5,
      paddingRight: 5
    },  
    footer: {
      flexDirection: 'row',
      borderColor: 'transparent',    
      padding: 10
    },  
    input: {
      backgroundColor: '#fff', 
      fontSize: 18,
      marginRight: 10,
      marginTop: 10,
      borderColor: '#ccc',   
      borderRadius: 45,
      borderWidth: 0.4,
      flex: 1,
    }, 
    sendIcon: {
      fontWeight: 'bold',
      color: '#FFF',   
      height: 18,  
      fontSize: 30,
      alignSelf: 'center'
    },
    send: {
      backgroundColor: '#312E40',
      borderRadius: 45,
      borderWidth: 0.4,
      borderColor: '#312E40',
      padding: 15,
      fontSize: 18,
      color: '#fff',
      alignSelf: 'center',
    },
    messagesContainer: {
      borderColor: '#fff',
      alignSelf: 'stretch',
      padding: 8,
      paddingBottom: 5,
      marginRight: 5,
      paddingRight: 5
    },
  });