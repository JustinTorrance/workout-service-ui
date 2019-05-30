import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { fetchAllWorkouts } from '../thunks/fetchAllWorkouts';

export class HomeScreen extends Component {
  async componentDidMount() {
    const { fetchAllWorkouts } = this.props;
    await fetchAllWorkouts();
  }

  navigateSearchScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Search');
  }

  navigateCreateWorkout = () => {
    const { navigate } = this.props.navigation;
    navigate('CreateWorkout');
  }

  render() {
    const { workouts, isLoading } = this.props;
    const { navigate } = this.props.navigation;
    console.log(workouts)
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome!</Text>
          <View>
            <TouchableOpacity style={styles.button} onPress={this.navigateSearchScreen}>
              <Text>Search Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.navigateCreateWorkout}>
              <Text>Create New Workout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.myWorkouts}>
          <Text style={styles.boldFont}>My Workouts: </Text>
        </View>
        {
          isLoading ?
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#000" />
          </View> :
          <FlatGrid
            itemDimension={130}
            style={styles.gridView}
            items={workouts}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemContainer}
                onPress={() => {
                  navigate('Workout', { workout: {item} })
                }}
              >
                <Text key={item.id} style={styles.itemName}>
                  {item.name}
                </Text>
                <Text style={styles.centerText}>Rating: {item.avgrating}</Text>
                <Text style={styles.centerText}>Workout Length: {item.length}</Text>
              </TouchableOpacity>
            )}
          />
        }
      </ScrollView>
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
    backgroundColor: '#DDD',
    borderRadius: 50,
    margin: 5,
    padding: 10
  },
  welcome: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '600'
  },
  myWorkouts: {
    left: 30,
    marginTop: 50,
    marginBottom: 15
  },
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    borderRadius: 20,
    justifyContent: 'center',
    height: 100,
    elevation: 4,
  },
  itemName: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    bottom: 10,
    textAlign: 'center'
  },
  boldFont: {
    fontWeight: '600'
  },
  centerText: {
    textAlign: 'center'
  },
  loading: {
    marginTop: 40
  }
});

export const mapStateToProps = state => ({
  workouts: state.workouts,
  isLoading: state.loading
});

export const mapDispatchToProps = dispatch => ({
  fetchAllWorkouts: data => dispatch(fetchAllWorkouts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);