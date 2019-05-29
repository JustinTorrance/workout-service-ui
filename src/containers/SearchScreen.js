import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { connect } from 'react-redux';
import { fetchAllWorkouts } from '../thunks/fetchAllWorkouts';

class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  async componentDidMount() {
    const { fetchAllWorkouts } = this.props;
    await fetchAllWorkouts();
  }

  handleSearch = input => {
    this.setState({ searchInput: input });
  };

  filterBySearch = input => {
    const { workouts } = this.props;
    const filteredSearch = workouts.filter(workout => workout.name = input);
    return filteredSearch;
  };

  render() {
    const { searchInput } = this.state;
    const { workouts } = this.props;
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
              onChangeText={searchInput => this.handleSearch(searchInput)}
              value={searchInput}
              placeholder="Search"
            />
            <TouchableOpacity style={styles.button}>
              <Text> Search </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.filter}>Filter by Categories: </Text>
        </View>
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
    borderRadius: 30,
    marginLeft: 12,
    alignItems: 'center',
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
    fontSize: 16,
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


