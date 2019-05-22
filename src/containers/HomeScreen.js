import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fitness Application</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    alignItems: 'center'
  }
});