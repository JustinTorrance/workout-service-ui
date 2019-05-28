import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

export default class WorkoutScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    const { name, length, repetitions  } = this.props.selectedWorkout

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>{name}</Text>
          <Text>Length: {length}</Text>
        </View>

        <View style={styles.exercise}>
          { repetitions.map(exercise => {
            return  <Text style={styles.textStyle}>{exercise.exercise.name}</Text>
          }) }
        
          { repetitions.map(exercise => {
            return  <Text style={styles.textStyle}>{exercise.description}</Text>
          }) }
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => ({
  selectedWorkout: state.selectedWorkout
})

export default connect(mapStateToProps)(WorkoutScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exercise: {
    // flex: 1, 
  },
  textStyle: {
    textAlign: 'center',
    flex: 2,
    flexDirection: 'row',
  }

});