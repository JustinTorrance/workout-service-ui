import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import SearchScreen from './SearchScreen';
import { fetchExercises } from '../thunks/fetchExercises';

export class ExerciseScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    await this.props.fetchAllExercises();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={styles.title}>Exercises</Text>
        <FlatGrid
          itemDimension={130}
          style={styles.gridView}
          items={this.props.exercises}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text key={item.id} style={styles.itemName}>
                {item.name}
              </Text>
              <TouchableOpacity onPress={() => {
                navigate('CreateWorkout', { exercise: {item}})
              }}>
                <Text style={styles.button}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

export const mapStateToProps = state => ({
  exercises: state.exercises
});

export const mapDispatchToProps = dispatch => ({
  fetchAllExercises: () => dispatch(fetchExercises())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseScreen);

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center'
  },
  gridView: {
    marginTop: 10,
    flex: 1
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderColor: '#DC143C',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 150,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  itemName: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    bottom: 50,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#DC143C',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center'
  }
});