import React, { Component } from 'react';
import { Text, FlatList, StyleSheet, ScrollView, View, Button } from 'react-native';
import { connect } from 'react-redux';

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


  render() {

    return (
      <ScrollView>
        <FlatList
          data={this.state.exercises}
          renderItem={({item}) => 
          <View key={item.id} style={styles.exercise}>
            <Text key={item.id}>{item.name}</Text>
            <Button
              // onPress={onPressLearnMore}
              title="+"
              color="#841584"
              width='200'
              
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
  }
});