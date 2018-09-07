import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'
import {createBottomTabNavigator } from 'react-navigation'
import HomeTab from './HomeTab'

export default class MainScreen extends React.Component {
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft:10}}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send-outline' style={{paddingRight: 10}}/>,
        headerTitleStyle:{marginLeft:70,alignSelf:'center'},
}
    
  render() {
    return (
        <AppTabNavigator/>
        );
  }
}
const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    }
  })
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });