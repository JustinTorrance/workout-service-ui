import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateWorkout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Create Workout </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});