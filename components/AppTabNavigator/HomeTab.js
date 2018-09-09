import React from 'react';
import { Text, View,StyleSheet,ScrollView } from 'react-native';
import {Icon, Container,Content, Thumbnail, Header,Left, Right, Body} from 'native-base'
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
        <Header style={{backgroundColor:'#F5F5F5'}}>
          <Left><Icon name='ios-camera-outline' style={{paddingLeft:10}}/></Left>
          <Body><Text style={[{paddingLeft:70},{fontWeight:'bold'}]}>Instagram</Text></Body> 
          <Right><Icon name='ios-send-outline' style={{paddingRight: 10}}/></Right>
        </Header>
        <Content>
          <View style={{height:100}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:7}}>
              <Text style={{fontWeight:'bold'}}>Stories</Text> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name='md-play' style={{fontSize:14}}/>
                <Text style={{fontWeight:'bold'}}> Watch all</Text>
              </View>
              
            </View>
            <View style={{flex:3}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems:'center',
                  paddingStart:5,
                  paddingEnd:5
                }}
              > 
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/2.png')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/4.png')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/a.jpg')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/2.png')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/2.png')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/4.png')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/a.jpg')}/>
                <Thumbnail style={{marginHorizontal:5,borderColor:'pink',borderWidth:2}} source={require('../../assets/2.png')}/>
              </ScrollView>
            </View>
          </View>
        
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