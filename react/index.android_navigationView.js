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
    

  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff',flexDirection:"column",}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'flex-end',justifyContent: "space-around"}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
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
