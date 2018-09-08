import React from 'react';
import { Text, View,StyleSheet, Image} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default class CardComponent extends React.Component {
 
  render() {
    const images = {
        "1": require('../assets/2.png'),
        "2": require('../assets/4.png'),
        "3": require('../assets/a.jpg')
    }
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../assets/4.png')}/>
                    <Body>
                        <Text>Jefferson</Text>
                        <Text note>Enero 15, 2018</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={images[this.props.imageSource]} style={{height:200,width:null,flex:1}}/>
            </CardItem>
            <CardItem style={{height:45}} >
                <Left>
                    <Button transparent>
                        <Icon name='ios-heart-outline' style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='ios-chatbubbles-outline' style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name='ios-send-outline' style={{color:'black'}}/>
                    </Button>
                </Left>
            </CardItem>
            <CardItem style={{height:20}}>
                <Text>{this.props.likes} likes</Text>
            </CardItem>
            <CardItem >
                <Body>
                <Text>
                    <Text style={{fontWeight:'900'}}>jefferson </Text>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Veritatis corrupti tempora 
                    maxime perferendis fuga vitae tempore recusandae 
                    suscipit harum? Consequuntur, aliquam! Saepe, vitae 
                    dignissimos! Nam perferendis mollitia obcaecati tenetur 
                    deserunt!
                </Text>
                </Body>
            </CardItem>
        </Card>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});