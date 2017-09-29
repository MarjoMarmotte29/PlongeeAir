import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {
    this.state.fontLoaded ? (
      <Text style={styles.Text}>Calcul de Décompression Plongées MN92</Text>
    ) : null
  }
       
      </View>
    );
  
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    
  },
  Text :{
    fontFamily: 'open-sans-old',
    fontSize: 30,
    color: '#fff',
    marginTop:150,
  }
});
