import React from 'react';
import {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {OffCanvas3D} from 'react-native-off-canvas-menu';
import MainView from './MainView';
import ControlPanel from './ControlPanel';
import WebScreen from './WebScreen';
import Login from './Login';

console.disableYellowBox = true;

export default class App extends React.Component {
  
  

  state = {
    menuOpen: false,
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
  
  render () {
    return (
        <View style={{flex: 1}}>
          <OffCanvas3D
          active={this.state.menuOpen}
          onMenuPress={this.handleMenu.bind(this)}
          backgroundColor={'#3F3B52'}
          menuTextStyles={{color: 'white'}}
          handleBackPress={true}
          menuItems={[
            {
              title: 'CHAT',            
              renderScene: <MainView/>
            },
            {
              title: 'GUIDE',
              renderScene: <WebScreen/>
            },
            {
              title: 'LOGIN',
              renderScene: <Login/>
            }
          ]}/>
        </View>
    )
  } 
}
