import React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base'
export default class HomeTab extends React.Component {
  static navigationOptions ={
    tabBarIcon:({tintColor})=>  (
      <Icon name='ios-home' style={{color:tintColor}}/>
    ),
  };
  render() {
    return (
        <View>
          <Text>Hola</Text>
        </View>
      
    );
  }
}