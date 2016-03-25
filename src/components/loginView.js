
'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight
} from 'react-native'

class loginView extends Component{
  render(){
    return(
      <View style={style.container}>
        <Text>Este es el componente Login</Text>
        <TouchableHighlight onPress={(this.onLoginPressed.bind(this))} style={style.boton}>
          <Text style={style.botonTexto}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={(this.onRegisterPressed.bind(this))} style={style.boton}>
          <Text style={style.botonTexto}>Register</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onLoginPressed(){
    Alert.alert(
      'SuperHero dice',
      'Te has Logueado',
      [
        {text: 'OK', onPress: () => console.log('OK Pulsado')}
      ]
    );
  }

  onRegisterPressed(){
    Alert.alert(
      'SuperHero dice',
      'Te has autenticado',
      [
        {text: 'OK', onPress: () => console.log('OK Pulsado')}
      ]
    );
  }
}


const style = StyleSheet.create({

   boton: {
     margin: 10,
     backgroundColor: 'blue',
     width: 300,
     height:36,
     borderWidth: 1,
     borderRadius: 8,
     justifyContent: 'center',
     alignItems: 'center'
   },
   botonTexto: {
     color: 'white'
   }
});

module.exports = loginView;
