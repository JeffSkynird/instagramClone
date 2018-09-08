import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Icon, Container,Content} from 'native-base'
import CardComponent from '../CardComponent'
export default class HomeTab extends React.Component {
  static navigationOptions ={
    tabBarIcon:({tintColor})=>  (
      <Icon name='ios-home' style={{color:tintColor}}/>
    ),
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="200"/>
          <CardComponent imageSource="3" likes="300"/>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});