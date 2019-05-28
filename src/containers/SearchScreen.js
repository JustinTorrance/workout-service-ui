import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleSearch = input => {
    this.setState({ searchInput: input });
  }

  saveSearch = input => {
    const { searchArrTest } = this.state;
    this.setState({ searchArrTest: [...searchArrTest, input] });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={searchInput => this.handleSearch(searchInput)}
          value={searchInput}
          placeholder='search'
        />
        <TouchableOpacity style={styles.button} onPress={() => this.saveSearch(searchInput)}>
          <Text> Search </Text>
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
    paddingLeft: 7,
    height: 30,
    width: 300,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1
  },
  button: {
    top: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});