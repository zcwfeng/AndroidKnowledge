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

  const Header = require("./Header")

  class AwesomeProject extends Component {


    render() {

     

      return (
          <View style={styles.flex}>
          <Header></Header>
          <List title="科技展上什么“神器”吸引住习近平的目光"></List>
          <List title="四川广元沉船事件前 白龙湖湖面情况"></List>

          <List title="揭秘黄光裕减刑案细节：减刑幅度比普通罪犯更小"></List>

          <List title="毛坦厂中学:万人送考 放《好日子》等歌曲"></List>
          <ImportantViews 
            news={["滴滴回应电竞选手被砍:系私下借用他人账号接单",
                  "顾客订餐吃到似蟑螂昆虫 商家:每家店都会有",
                "公司董事长偷情艺术名媛 捉奸过程被直播(图)",
                "男子手机裤袋内自燃被灼伤 当街脱裤子自救(图)",
                "党报\:有领导换届前有点\"蔫\" 怕出错丢了选票",
                "女子警告公交色狼遭对方威胁辱骂 无乘客制止"]}/>
         </View>
      
      );


    }
  }



 class List extends Component{
    render(){
      return(
          <View style={[styles.list_item]}>
            <Text numberOfLines={1} style={[styles.list_item_font]}>{this.props.title}</Text>
          </View>
        );
    }
 }

 class ImportantViews extends Component{
  show(title) {
    alert(title);
  }
     
    render(){

      var news = [];
      for(var i in this.props.news){

         var text = (
          <Text key={i}
                onPress={this.show.bind(this,this.props.news[i])}
                numberOfLines={2}
                style={styles.news_item}>
                {this.props.news[i]}
                </Text>


          );
         news.push(text);

      }

      return(
        <View style={styles.flex}>
          <Text style={styles.news_title_font}>今日要闻</Text>
          {news}
        </View>
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

  AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);