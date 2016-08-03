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
    TextInput,
    Dimensions,
  } from 'react-native';


  class AwesomeProject extends Component {


    render() {



      return (
       

<View style={styles.container}>
            <View style={styles.child} />
          </View>
        

          
      );


    }
  }



 class Search extends Component{
   
   render(){
      return(
        <View style={[styles.flex,styles.flexDirection]}>
          <View style={[styles.flex,styles.input]}>
          <TextInput></TextInput>
          </View>
          <View style={styles.btn}>
            <Text style={styles.search}>搜索</Text>
          </View>
        </View>
        );
    }
 }




  const styles = StyleSheet.create({
    flex: {
      flex:1,
    },

    
    flexDirection :{
      flexDirection:'row',
    },

    topStatus : {
      marginTop : 25,
    } ,

    input:{
      height:45,
      borderColor:'red',
      borderWidth: 1,
      marginLeft:10,
      
      borderRadius:5,
      paddingLeft:10,
    },
    
    btn:{
      height:45,
      width:45,
      marginLeft:-5,
      marginRight:5,
      backgroundColor:'#23BEFF',
      alignItems:'center', 
      justifyContent:'center',
      
    },
    search:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:15,
    },

    container: {
      backgroundColor:'green',
      flex: 1,
    },
    child: {
      flex: 1,
      backgroundColor: 'blue',
      transform: [
        {
          perspective: 850
        },
        {
          translateX: -Dimensions.get('window').width * 0.24
        },
        {
          rotateY: '60deg'
        },

      ],
    }
  });
  
 

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);