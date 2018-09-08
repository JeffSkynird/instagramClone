import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'
import {createBottomTabNavigator } from 'react-navigation'
import HomeTab from './HomeTab'
import SearchTab from './SearchTab'
import AddMediaTab from './AddMediaTab'
import LikesTab from './LikesTab'
import ProfileTab from './ProfileTab'

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
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
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