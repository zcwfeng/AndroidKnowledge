  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid,
  ListView,
} from 'react-native';



class AwesomeProject extends Component {

  
  render() {
    return (
    <Image source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/e7cd7b899e510fb3a78c787fdd33c895d0430c44.jpg'}} 
    style={{width:400,height:600}} >
    <Text welcome>Inside</Text>
    </Image>

   

        );

 


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   elements:{
    alignItems: "flex-start",
    color:"#000000",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  base: {
    width: 38,
    height: 38,
  },
  background: {
    backgroundColor: '#ff0000',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ffff',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
