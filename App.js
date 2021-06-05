import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carlist from './components/Carslist';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to car house</Text>
      {/* <CarItem
        name={"Model X"}
        tagline={"starting from 99,500"}
        image={require('./assets/images/ModelX.jpeg')}
        taglineCTA={"Lorem lorem lorem"}
      /> */}
      <Carlist />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
  }

});
