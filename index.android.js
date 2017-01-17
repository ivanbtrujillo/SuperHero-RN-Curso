/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

let NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index) {

    if(route.name=='Login' || route.name=='Dashboard'){
      return null;
    }
    return(<TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

            <Text style={{marginTop: 10, marginLeft:20, color:'#007AFF'}}>Back</Text>
         </TouchableHighlight>
    )
  },
  RightButton: function(route){
    return null;
  },
  Title: function(route){
    if(route.name == 'Login' || route.name == 'Dashboard'){
      return null;
    }
    return(
      <Text style={{marginTop: 10, color:'#007AFF' }}>
        {route.name}
      </Text>
    )
  },
};

const Login = require('./src/components/loginView')
const Dashboard = require('./src/components/dashboardView')
const ComicDetail = require('./src/components/comicDetailView');

class SuperHero extends Component {
  renderScene (route, navigator) {
    switch (route.name) {
       case 'Login':
        return (
         <Login {...route.props} navigator={navigator} route={route} />
       );
       case 'Dashboard':
        return (
          <Dashboard {...route.props} navigator={navigator} route={route}/>
       );
       case 'Details':
        return (
          <ComicDetail {...route.props} navigator={navigator} route={route}/>
       );
    }
  }

  render(){
    return(

      <Navigator style={styles.bar}
         initialRoute={{name: 'Login'}}
         renderScene={this.renderScene}
         configureScene={(route) => {
           if(route.sceneConfig){
             return route.sceneConfig;
           }
           return Navigator.SceneConfigs.FloatFromRight
         }}
         navigationBar={
           <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}/>}
      />
    )
  }

}

const styles = StyleSheet.create({
  bar:{
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('SuperHero', () => SuperHero);
