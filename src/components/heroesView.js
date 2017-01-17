
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class heroesView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Soy el componente Heroes</Text>
      </View>
    );
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
    marginTop: 40,
    fontSize: 20,
    justifyContent: 'center'
  }
});

module.exports = heroesView;
