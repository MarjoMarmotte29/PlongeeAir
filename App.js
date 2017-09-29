import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Calcul de Décompression Plongées MN92</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    fontSize: 28,
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
  },
});
