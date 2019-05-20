import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fitness Application</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});