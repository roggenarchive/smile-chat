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
import styles from './Styles';
import Header from './Header';


const NAME = '@jugendhackt';
const CHANNEL = 'jugendhackt';

const NICKNAME = ""; 

export default class Login extends React.Component{
    handleChangeText(text) {
        NICKNAME = test;
       }

    render(){
        const nickname = "";
        return (
            
            <View>
                <Header title={CHANNEL} />
                <View style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}>
                    <View style={{paddingTop: (((window.innerHeight) / 2) +  10), flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                        <TextInput              
                            value={this.NICKNAME} 
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            placeholder="Type something nice"
                            onChangeText={text => this.handleChangeText(text)}/>
                    </View>
                </View>
            </View>
        )


    } 
}