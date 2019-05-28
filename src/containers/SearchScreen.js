import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: 'Search for workouts!'
    };
  }

  handleSearch = input => {
    this.setState({ searchInput: input });
  };

  saveSearch = input => {
    const { searchArrTest } = this.state;
    this.setState({ searchArrTest: [...searchArrTest, input] });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={searchInput => this.handleSearch(searchInput)}
          value={searchInput}
        />
        <TouchableOpacity style={styles.button}>
          <Text> Add To State </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 10
  },
  textInput: {
    height: 30,
    width: 300,
    fontSize: 30,
    borderColor: '#000',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
