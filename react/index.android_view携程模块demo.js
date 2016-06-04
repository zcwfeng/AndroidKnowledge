  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   */

  import React, {
    Component
  } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    ListView,
    PixelRatio,
  } from 'react-native';



  class AwesomeProject extends Component {


    render() {

      return (
        <View style={styles.flex}>
          
          <View style={styles.container}>
            
            <View style={[styles.item, styles.center,styles.flex]}>
              <Text style={[styles.font]}>酒店</Text>
            </View>

            <View style={[styles.item,styles.lineLeftRight]}>
               <View style={[styles.center,styles.flex,styles.lineCenter]}>
                <Text style={[styles.font]}>海外酒店</Text>
               </View>
               <View style={[styles.center,styles.flex]}>
                  <Text style={[styles.font]}>优惠酒店</Text>

               </View>
            </View>
            
           
            <View style={[styles.item]}>
               <View style={[styles.center,styles.flex,styles.lineCenter]}>
                  <Text style={[styles.center,styles.font]}>团购</Text>
               </View>
               <View style={[styles.center,styles.flex]}>
                  <Text style={[styles.font]}>客栈，公寓</Text>

               </View>
            </View>

         
          </View>
      
       </View>
      );


    }
  }

  const styles = StyleSheet.create({
    flex: {
      flex:1,
    },

    container: {
      marginRight: 5,
      marginLeft: 5,
      marginTop: 200,
      flexDirection: 'row',
      backgroundColor: '#fff',
      backgroundColor: '#ff0067',
      borderColor:'red',
      padding:2,
      borderRadius: 5,
      height:84,


    },

    lineLeftRight: {
      borderLeftWidth: 1/PixelRatio.get(),
      borderRightWidth: 1/PixelRatio.get(),
      borderColor: '#fff',
    },

    font:{
      fontSize:16,
      color: 'white',
      fontWeight: 'bold',
    },

    lineCenter:{
      borderBottomWidth:1/PixelRatio.get(),
      borderColor: '#fff'
    },
    item:{
      flex: 1,
      height: 80,
      
    },

    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);