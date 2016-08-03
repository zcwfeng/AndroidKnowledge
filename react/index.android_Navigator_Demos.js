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
    Navigator,
    ScrollView,
  } from 'react-native';

  const Header = require("./Header")

  class AwesomeProject extends Component {


    render() {

      let defaultName='List';
      let defaultComponent=List;

      return (
          <Navigator 
            initialRoute={{name: defaultName, component: defaultComponent}}
            configureScene={
              (route) => 
              {
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
              }
            }
            
            renderScene={
              (route,navigator)=>
              {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
              }
            }/>
      
      );


    }
  }



 class List extends Component{
   constructor(props) {
     super(props);
     this.state = {author:"zcw",id:1,user:null,};
   }
   
   _pressButton(){
     const {navigator} = this.props;
     const self = this;
     if(navigator) {
       navigator.push({
         name : 'Detail',
         component : Detail,
         params : {
           author: this.state.author,
           id:this.state.id,
           getUser:function(user) {
             self.setState({
                user:user
             })
           }
         }
       })
     }
   }
   
   render(){
        if(this.state.user) {
           return(
              <ScrollView style={styles.flex}>
                  <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>用户信息：{JSON.stringify(this.state.user)}</Text>
             </ScrollView>
           );
        }else {
          return(
          
              <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>* 豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>* 豪华游轮台湾3日游</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>* 豪华游轮塔克拉玛干岛3日游</Text>

              </ScrollView>
          
            );
        }
    }
 }
 
 class Detail extends Component{
   constructor(props) {
     super(props);
     this.state={};
   }
   
   componentDidMount(){
     this.setState({
       author:this.props.author,
     });
   }
   
   _pressButton (){
     const {navigator} = this.props;
     if(this.props.getUser) {
       let user = MODEL_USERS[this.props.id];
       this.props.getUser(user);
     }
     if(navigator) {
       navigator.pop();
     }
   }
   
   render(){
     return(
       <ScrollView>
          <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>作者是：{this.state.author}</Text>
       </ScrollView>
     );
   }
 }

 
 
 

  const styles = StyleSheet.create({
    flex: {
      flex:1,
    },

    
    news_item:{
      marginLeft:10,
      marginRight:10,
      justifyContent:'center',
      height:40,
    },

    news_title_font:{
      fontSize:20,
      color:'red',
    },

    list_item_font:{
      fontSize:16,

    },
    list_item:{
      marginLeft:10,
      marginRight:10,
      justifyContent:'center',
      height:40,
      borderBottomWidth:1/PixelRatio.get(),
      borderBottomColor: '#ddd',
    },
  
    
  });
  
  const MODEL_USERS={
    1:{name:'mot',age:23},
    2:{name:'zcw',age:22}
  };

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);