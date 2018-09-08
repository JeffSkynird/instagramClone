import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'
export default class LikesTab extends React.Component {
  static navigationOptions ={
    tabBarIcon:({tintColor})=>  (
      <Icon name='ios-heart' style={{color:tintColor}}/>
    ),
  }; 
  render() {
    return (
      <Text>Hola mundo</Text>
    );
  }
}