import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Stopwatch } from 'react-native-stopwatch-timer';

export class WorkoutScreen extends Component {
  constructor() {
    super();
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 60000,
      resetTimer: false,
      resetStopwatch: false
    };

    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
  }

  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }

  startStopStopWatch() {
    this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
  }

  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }

  getFormattedTime(time) {
      this.currentTime = time;
  }

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
        <View style={styles.stopWatch}>
          <Text style={{marginBottom: 10, fontSize: 16, fontWeight: '600'}}>Workout Stopwatch</Text>
          <Stopwatch
            laps
            start={this.state.isStopwatchStart}
            reset={this.state.resetStopwatch}
            options={options}
            getTime={this.getFormattedTime}
          />
          <View style={styles.displayRow}>
            <TouchableOpacity onPress={this.startStopStopWatch} style={styles.startStop}>
              <Text>{!this.state.isStopwatchStart ? 'Start' : 'Stop'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.resetStopwatch} style={styles.startStop}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
        {workout.item.repetitions.map(exercise => {
          return (
            <View key={exercise.id} style={styles.exercise}>
              <Text style={styles.textStyle}>
                {exercise.exercise.name} : {exercise.description}
              </Text>
              <Image
                style={styles.exerciseImage}
                source={{
                  uri:
                    'https://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/l/70_1.jpg'
                }}
              />
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
    alignItems: 'center',
    backgroundColor: '#F1F0F0',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
    elevation: 1,
    flexDirection: 'row',
    height: 100,
    marginTop: 13,
    marginLeft: 80,
    marginRight: 80,
    width: 260,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
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
  },
  startStop: {
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 50,
    fontSize: 12,
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 5,
    marginTop: 6,
    width: 90,
  },
  displayRow: {
    flexDirection: 'row',
  },
  stopWatch: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const options = {
  container: {
    backgroundColor: '#DDD',
    padding: 5,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#000',
    marginLeft: 7,
  }
}