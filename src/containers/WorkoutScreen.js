import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

export class WorkoutScreen extends Component {

  render() {
    const { navigation } = this.props;
    const workout = navigation.getParam('workout');
    const name = workout.item.name;
    const length = workout.item.length;
    const rating = workout.item.avgrating;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>{name}</Text>
          <Text>Length: {length}</Text>
          <Text>Rating: {rating}</Text>
        </View>
        <View style={styles.exercise}>
          { workout.item.repetitions.map(exercise => {
            return  <Text style={styles.textStyle}>{exercise.description}: {exercise.exercise.name}</Text>
          }) }
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = state => ({
  workout: state.selectedWorkout
});

export default connect(mapStateToProps, null)(WorkoutScreen);

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