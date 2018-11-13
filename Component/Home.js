import React,{Component} from 'react';
import{Container,Content,Text, Thumbnail,H3,Button} from 'native-base';
import {StyleSheet} from 'react-native';
import Heroes from './Heroes';
import { createStackNavigator } from 'react-navigation';
class Home extends Component{
    /**static navigationOptions = {
        header: null
      }*/
    
    render(){
        return(
            <Container style={styles.conte}>
                <Content>
                    <Thumbnail large
                    style={styles.thumb}
                    source={{uri: 'https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png'}}/>
                    <Text style={styles.sub}>
                        Welcome to Mobile Legends Heroes Dictionary
                    </Text>
                    <Text style={styles.sub}>
                       Start Exporing/Creating Your Favourites Heroes
                    </Text>
                    <Button block style={styles.btn} onPress={()=> this.props.navigation.navigate('Heroes')}>
                        <Text>Start</Text>
                    </Button>
                </Content>
            </Container>





        );
    }
}
const RootStack = createStackNavigator(
    {
      Home: Home,
      Heroes: Heroes,
    },
    {
      initialRouteName: 'Home',
      
    },
  );

const styles = StyleSheet.create({
    thumb:{
        marginTop:20,
        marginLeft:20,
        alignItems:'center',
        width:300,
        height:200
    },
    conte:{
       
        justifyContent: "center",
        alignItems:"center",
        

    },
    sub:{
        textAlign:'center',
        color:'#ACD2FA',
    },
    btn:{
        marginTop: 15
    }
});
export default class navi extends Component{
    render(){
        return(
            <RootStack/>
        );
    }
}