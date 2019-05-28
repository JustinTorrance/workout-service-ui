import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { fetchData } from '../utilities/fetchData';
import { fetchAllWorkouts } from '../thunks/fetchAllWorkouts';

class HomeScreen extends Component {
  async componentDidMount() {
    const { fetchAllWorkouts, workouts } = this.props;
    await fetchAllWorkouts();
    console.log('home container entered')
  }

  displayWorkouts = () => {
    const { workouts } = this.props;
    console.log('displayworkouts entered')
    return workouts.map(workout => {
      return (
        <View key={workout.id}>
          <Text>{workout.name}</Text>
          <Text>{workout.rating}</Text>
        </View>
      )
    });
  }

  render() {
    console.log('workouts in homepage', this.props.workouts);
    return (
      <View style={styles.container}>
        <Text style={styles.marginBottom}>Welcome!</Text>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Search Workouts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Create New Workout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myWorkouts}>
          <Text>My Workouts</Text>
          {this.displayWorkouts()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    margin: 5,
    padding: 10
  },
  marginBottom: {
    marginBottom: 20
  },
  myWorkouts: {
    left: 10
  }
});

export const mapStateToProps = state => ({
  workouts: state.workouts
});

export const mapDispatchToProps = dispatch => ({
  fetchAllWorkouts: data => dispatch(fetchAllWorkouts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);