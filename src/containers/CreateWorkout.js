import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class CreateWorkout extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      duration: '',
      exercises: []
    }
  }

  handleClick = () => {
    const { navigate } = this.props.navigation;
    navigate('ExerciseScreen');
  }

  render() {

    const { navigation } = this.props;
    const exercise = navigation.getParam('exercise');
    
    console.log(' Navigation:  ', navigation)
    console.log('EXERCISE: ', exercise.id)

    return (
      <ScrollView>
        <View>
          <View>
            <Text style={styles.title}> Create Workout </Text>
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
            <TouchableOpacity onPress={this.handleClick}>
              <Text style={styles.button}>Add Exercise</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}



  // + will add exercise to redux store,
  //direct to CreateWorkout
//mapStateToProps, map and display execises

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    fontSize: 25
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
    width: 200
  },
});