import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

export default class WorkoutScreen extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  fetchData = async () => {
    const response = await fetch('https://workoutservice.herokuapp.com/api/v1/workouts')
    const data = await response.json()
    this.setState({ data })
    console.log(data)
  }

  render() {
    const dataDisplay = this.state.data.map(workout => {
      return workout
    })

    // const { name } = this.props.selectedWorkout

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Text>{name}</Text> */}
          <Text>Length: 45 minutes</Text>
          <Button onPress={this.fetchData} title='HOWDY'>

          </Button>

        </View>
        <View style={styles.exercise}>
          <Text style={styles.textStyle}>{}</Text> 
          <Text style={styles.textStyle}>{dataDisplay}</Text>
        </View>
      </ScrollView>
    )
  }
}

// export const mapStateToProps = (state) => ({
//   // selectedWorkout: state.selectedWorkout
// })

// export default connect(mapStateToProps)(WorkoutScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  exercise: {
    // flex: 4, 
    // flexDirection: 'row',
    // alignItems: 'center',
    // textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center',
    flex: 2,
    flexDirection: 'row',

    // left: '50%'
  }

});