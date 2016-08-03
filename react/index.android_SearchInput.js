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
    ListView,
    PixelRatio,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from 'react-native';

  var onePT = 1 / PixelRatio.get();
  class AwesomeProject extends Component {


    render() {



      return (
       
        <View style={[styles.flex,styles.topStatus]}>
          <Search></Search>
        </View>
          
      );


    }
  }



 class Search extends Component{
   //show button this.state
   //view 显示的值

   constructor(props) {
     super(props);
     this.state={
       show: false,
       value: null,
     };
   }

   hide(val){
     this.setState(
       {
         show:false,
         value:val,
       }
     );
   }

   getValue(text) {
     this.setState(
       {
         show:true,
         value:text,
       }
     );
   }


   showalert(text) {
     alert(text);
   }
   
   render(){
      return(
        <View style={styles.flex}>
          <View style={[styles.flexDirection]}>
            <View style={[styles.flex,styles.input]}>
            <TextInput 
                placeholder="请输入关键词" keyboardType="web-search" returnKeyType="search" value={this.state.value} onChangeText={this.getValue.bind(this)}></TextInput>
            </View>
            <View style={styles.btn}> 
              <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
            </View>
          </View>
          {this.state.show ?
            <View style={styles.result}>
               <Text style={styles.item} onPress={this.hide.bind(this,this.state.value + '张传伟QQ')}  numberOfLines={1}>{this.state.value}张传伟QQ</Text>
               <Text style={styles.item} onPress={this.hide.bind(this,this.state.value + '大神')}  numberOfLines={1}>{this.state.value}大神</Text>
               <Text style={styles.item} onPress={this.hide.bind(this,this.state.value + '工程师')}  numberOfLines={1}>{this.state.value}工程师</Text>
               <Text style={styles.item} onPress={this.hide.bind(this,this.state.value + '张小王子')}  numberOfLines={1}>{this.state.value}小王子</Text>
            </View>
            :null

          }

          <View>
            <TouchableHighlight onPress={this.showalert.bind(this,'React Native')} underlayColor='#fa00a0'>
              <Text style={styles.item}>zcw qq 602927062@qq.com</Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={this.showalert.bind(this,'React Native zcw')} >
              <Text style={styles.item}>作者：zcwfeng</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={this.showalert.bind(this,'React Native zcw Feedback')} >
              <View><Text style={styles.item}>作者：zcwfeng123</Text></View>
            </TouchableWithoutFeedback>
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
    result:{
      marginTop:onePT,
      marginLeft:18,
      marginRight:5,
      height:200,

    },
    item:{
    fontSize:16,
    paddingTop:5,
    paddingBottom:10,
    },

  });
  
 

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);