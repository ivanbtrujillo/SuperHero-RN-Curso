
'use strict'

import React, {
  Component,
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native'

class loginView extends Component{


  constructor(props) {
      super(props);
      console.log(props);
      this.state = {
          username: "",
          password: ""
      };
  }


  render(){
    return(
      <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2015/03/11/01/33/hulk-667988_960_720.jpg'}} style={styles.container}>
        <Text style={styles.title}>
         SuperHero
        </Text>
        <View>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textoBoton}>Login</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }

  onLogin () {
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    );
  }

  aceptar () {
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    });
  }
  cancelar () {
    console.log ('Login cancelado');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    padding: 30
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    marginBottom: 10,
    backgroundColor: 'rgba(52,52,52,0)',
    textAlign: 'center',
    color:'#FFFFFF'
 },
 boton: {
     height: 36,
     backgroundColor: 'red',
     borderWidth: 1,
     borderRadius: 8,
     marginTop: 100,
     justifyContent: 'center',
     alignItems: 'center'
 },
 textoBoton: {
     color: "#ffffff",
 }

})

module.exports = loginView;
