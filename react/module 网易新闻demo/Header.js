
import React, {
    Component
  } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
  } from 'react-native';
class Header extends Component{
     render(){
        return(
            <View style={styles.flex}>
                <Text style={[styles.font]}>
                  <Text style={styles.font_1}>网易</Text>
                  <Text style={styles.font_2}>新闻</Text>
                  <Text>有态度</Text>
                </Text>
            </View>
          );
     }
  }


  

  const styles = StyleSheet.create({
    flex: {
      borderBottomWidth:3/PixelRatio.get(),
      alignItems: 'center',
      height : 50,
      marginTop: 100,
      borderBottomColor: '#EF2D36',
    },

   font:{
      fontSize:25,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    font_1: {
       color: '#CD1D1C'
    },
    font_2: {
      backgroundColor:'#CD1D1C',
      color: '#FFF'
    },
    
  });

module.exports=Header;