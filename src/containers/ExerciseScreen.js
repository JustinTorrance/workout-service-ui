import React, { Component } from 'react';
import { Text, FlatList, StyleSheet, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';

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
        }
      ]
    }
  }

  addExercise = () => {
    //this adds exercise to workout
  }

  render() {

    return (
      <ScrollView>
        <FlatGrid
          itemDimension={130}
          style={styles.gridView}
          items={this.state.exercises}
          renderItem={({item}) => 
          <View key={item.id} style={styles.exercise}>
            <Text key={item.id}>{item.name}</Text>
            <Button
              onPress={addExercise}
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

})

export default connect(mapStateToProps)(ExerciseScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  exercise:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
});