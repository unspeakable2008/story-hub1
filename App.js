import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteScreen from '.screens/WriteScreen'
import ReadScreen  from './screens/ReadScreen'


export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen}
});
const AppContainer = createAppContainer(TabNavigator);