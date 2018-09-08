import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'
export default class AddMediaTab extends React.Component {
  static navigationOptions ={
    tabBarIcon:({tintColor})=>  (
      <Icon name='ios-add-circle' style={{color:tintColor}}/>
    ),
  }; 
  render() {
        return (
          <Text>Hola mundo</Text>
        );
      }
    }