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

export default StyleSheet.create({ 
    container: {      
      flex: 1,
      backgroundColor: '#B9B9BD'
    },
    row: {
      flexDirection: 'row',
      padding: 3,
    },
    rowText: {
      flex: 1,      
      backgroundColor: '#fff',
      borderColor: '#ccc', 
      borderRadius: 20, 
      borderWidth: 0.4,
    },
    avatar: {
      borderRadius: 20,
      width: 40,
      height: 40,
      marginRight: 10
    },
    message: {
      marginLeft: 14,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: 16,
      color: '#696969'
    },
    footer: {
      flexDirection: 'row',
      borderColor: 'transparent',    
      padding: 10
    },  
    input: {
      backgroundColor: '#fff', 
      fontSize: 18,
      paddingLeft: 13,      
      marginRight: 10,
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
      padding: 15,
      fontSize: 18,
      color: '#fff',
      alignSelf: 'center',
    },  
    messagesContainer: {
      borderColor: '#fff',
      alignSelf: 'stretch',
      padding: 10
    },
  });