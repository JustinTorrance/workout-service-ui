import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
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
          <Text style={styles.workoutName}>{name}</Text>
          <Text style={styles.description}>Length: {length}</Text>
          <Text style={styles.description}>Rating: {rating}</Text>
        </View>
        <Text style={styles.exerciseTitle}>Exercises: </Text>
        {workout.item.repetitions.map(exercise => {
          return (
            <View key={exercise.id} style={styles.exercise}>
                <Text style={styles.textStyle}>
                  {exercise.exercise.name} : {exercise.description}
                </Text>
              {/* <View style={styles.imageContainer}> */}
                  <Image
                    style={styles.exerciseImage}
                    source={{ uri: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_1.jpg' }}
                  />
              {/* </View> */}
            </View>
          );
        })}
      </ScrollView>
    );
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
    justifyContent: 'center',
    top: 14
  },
  exercise: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#F1F0F0',
    width: 260,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  exerciseTitle: {
    left: 30,
    marginTop: 30,
    fontSize: 18,
    fontWeight: '600'
  },
  textStyle: {
    flex: 2,
    fontSize: 14,
    padding: 4
  },
  workoutName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    margin: 10
  },
  exerciseImage: {
    width: 65,
    height: 65,
    marginTop: 17,
    marginBottom: 20
  }
});