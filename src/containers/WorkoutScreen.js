import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

export default class WorkoutScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Intense Upper Body Challenge</Text>
          <Text>Length: 45 minutes</Text>
          <Button  
            title='START'
          />
        </View>
        <View style={styles.exercise}>
          <Text style={styles.textaz}>30 Seconds: </Text> 
          <Text style={styles.textaz}>Push Ups</Text>
        </View>
        <View  style={styles.exercise}>
          <Text style={styles.textaz}>30 Seconds: </Text> 
          <Text style={styles.textaz}>Pull Ups</Text>
        </View>
        <View style={styles.exercise}>
          <Text style={styles.textaz}>60 Seconds: </Text> 
          <Text style={styles.textaz}>Rest</Text>
        </View>
        <View  style={styles.exercise}>
          <Text style={styles.textaz}>30 Seconds: </Text> 
          <Text style={styles.textaz}>Push Ups</Text>
        </View>
        <View  style={styles.exercise}>
          <Text style={styles.textaz}>30 Seconds: </Text> 
          <Text style={styles.textaz}>Push Ups</Text>
        </View>
        <View  style={styles.exercise}>
          <Text style={styles.textaz}>60 Seconds: </Text> 
          <Text style={styles.textaz}>Rest</Text>
        </View>
        <View  style={styles.exercise}>
          <Text style={styles.textaz}>90 Seconds: </Text> 
          <Text style={styles.textaz}>Cool Down</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exercise: {
    display: flex, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  textaz: {
    textAlign: 'center'
  }

});