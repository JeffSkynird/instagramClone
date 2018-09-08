import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'

export default class ProfileTab extends React.Component {
  static navigationOptions ={
    tabBarIcon:({tintColor})=>  (
      <Icon name='person' style={{color:tintColor}}/>
    ),
  }; 
    render() {
        return (
          <Text>Hola mundo</Text>
        );
      }
    }