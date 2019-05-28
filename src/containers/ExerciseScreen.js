import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import SearchScreen from './SearchScreen';
import { fetchData } from '../utilities/fetchData'

export class ExerciseScreen extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [
        {
          id: 1,
          name: "Exercises 1",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 2,
          name: "Exercises 2",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 3,
          name: "Exercises 3",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 4,
          name: "Exercises 4",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 5,
          name: "Exercises 5",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 11,
          name: "Exercises 1",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 21,
          name: "Exercises 2",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 31,
          name: "Exercises 3",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 41,
          name: "Exercises 4",
          description: "30",
          img_url: "blank.jpg"
        },
        {
          id: 51,
          name: "Exercises 5",
          description: "30",
          img_url: "blank.jpg"
        }
      ]
    }
  }

  componentDidMount = async () => {
    const response = await fetch()
  }

  addExercise = () => {
    //this adds exercise to CreateWorkout component
    //redirects user to CreateWorkout component
  }

  render() {

    return (
      <ScrollView>
        <Text style={styles.title}>Exercises</Text>
        <SearchScreen />
        <FlatGrid
          itemDimension={130}
          style={styles.gridView}
          items={this.state.exercises}
          renderItem={({item}) => 
          <View key={item.id} style={styles.itemContainer}>
            <Text key={item.id} style={styles.itemName}>{item.name}</Text>
            <Button
              onPress={this.addExercise}
              title="+"
              color="#841584"
              width='100'
              
            />
          </View>
          }
        />
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => ({
  // exercises: state.exercises
})



export default connect(mapStateToProps)(ExerciseScreen)

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: "600",
    textAlign: 'center'
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  itemName: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    bottom: 50,
    textAlign: 'center'
  },
});