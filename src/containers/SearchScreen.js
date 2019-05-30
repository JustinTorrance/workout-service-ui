import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';
import { fetchAllWorkouts } from '../thunks/fetchAllWorkouts';

export class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      upperCaseSearch: '',
      filteredSearch: []
    };
  }

  handleSearch = async input => {
    await this.setState({ searchInput: input });
    this.convertTextToUpperCase();
  }

  convertTextToUpperCase = () => {
    const { searchInput } = this.state;
    const text = searchInput;
    let upperCaseInput = text.toUpperCase();
    this.setState({ upperCaseSearch: upperCaseInput });
  }

  filterBySearch = () => {
    const { workouts } = this.props;
    const { upperCaseSearch } = this.state;
    const filteredSearch = workouts.filter(workout => {
      let workoutName = workout.name.toUpperCase();
      return workoutName.includes(upperCaseSearch);
    });
    this.setState({ filteredSearch });
  };

  render() {
    const { searchInput, filteredSearch } = this.state;
    const { workouts } = this.props;
    const { navigate } = this.props.navigation;
    const topRated = workouts.sort((a, b) => {
      return b.avgrating - a.avgrating;
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Discover Workouts!</Text>
          <View style={styles.flexRow}>
            <TextInput
              style={styles.textInput}
              onChangeText={(input) => this.handleSearch(input)}
              value={searchInput}
              placeholder="Search"
              name='searchInput'
            />
            <TouchableOpacity style={styles.button} onPress={() => this.filterBySearch()}>
              <Text> Search </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.filter}>Filter by Categories: </Text>
        </View>

        {filteredSearch.length <= 0 ? (
          <View>
            <Text style={styles.workouts}>Top Rated: </Text>
            <FlatGrid
              itemDimension={130}
              style={styles.gridView}
              items={topRated}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.itemContainer}
                  onPress={() => {
                    navigate('Workout', { workout: { item } });
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
          </View>
        ) : (
          <View>
            <Text style={styles.workouts}>Search Results: </Text>
            <FlatGrid
              itemDimension={130}
              style={styles.gridView}
              items={filteredSearch}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.itemContainer}
                  onPress={() => {
                    navigate('Workout', { workout: { item } });
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
          </View>
        )}
      </ScrollView>
    );
  }
}

export const mapStateToProps = state => ({
  workouts: state.workouts
});

export const mapDispatchToProps = dispatch => ({
  fetchAllWorkouts: data => dispatch(fetchAllWorkouts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 14
  },
  textInput: {
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 7,
    height: 35,
    marginTop: 1,
    width: 300,
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 12,
    backgroundColor: '#DDDDDD',
    padding: 9
  },
  title: {
    marginBottom: 20
  },
  gridView: {
    marginTop: 0,
    flex: 1
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    borderRadius: 20,
    justifyContent: 'center',
    height: 100,
    elevation: 4
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
  workouts: {
    fontSize: 16,
    fontWeight: '600',
    left: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
  },
  filter: {
    marginTop: 30,
    left: 20,
    fontSize: 16,
    fontWeight: '400'
  }
});


