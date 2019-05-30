import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { saveWorkout } from '../thunks/saveWorkout';

export class CreateWorkout extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      duration: ''
    }
  }

  handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate('ExerciseScreen');
  }

  postWorkout = () => {
    const workout = {
      name: this.state.name,
      length: this.state.length,
      exercises: this.props.exercises
    }
    this.props.saveWorkout(workout)
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}> Create New Workout </Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Name'
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(duration) => this.setState({duration})}
              value={this.state.duration}
              placeholder='Duration'
            />
          </View>
          <View style={styles.container}>
            {this.props.exercisesToAddToWorkout.map(exercise => {
              return (
                <View key={exercise.id} style={styles.exercise}>
                  <TextInput
                    style={styles.repsInput}
                    placeholder='Time / reps'
                  />
                  <Text style={styles.textStyle}>
                    {exercise.item.name}
                  </Text>
                </View>
              );
            })}
            <TouchableOpacity onPress={this.handleClick}>
              <Text style={styles.button}>Add Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.postWorkout}>
              <Text style={styles.button}>Save Workout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => ({
  exercisesToAddToWorkout: state.exercisesInProgress
})

export const mapDispatchToProps = (dispatch) => ({
  saveWorkout: (workout) => dispatch(saveWorkout(workout))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 14,
  },
  repsInput: {
    borderColor: '#000',
    borderWidth: 1,
    width: 110,
    height: 30,
    fontSize: 15,
    paddingLeft: 9,
    borderRadius: 5,
    margin: 5
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    width: 250,
    height: 40,
    fontSize: 20,
    paddingLeft: 9,
    borderRadius: 20,
    margin: 10
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DC143C',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: 200,
    marginTop: 30
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
    marginLeft: 60,
    marginRight: 80,
    width: 300,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  textStyle: {
    fontSize: 25,
  },
});