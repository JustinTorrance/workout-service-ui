import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import WorkoutScreen from './WorkoutScreen';
import ExerciseScreen from './ExerciseScreen';
import CreateWorkout from './CreateWorkout';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen
});

const DashboardTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Workout: WorkoutScreen,
  Exercise: ExerciseScreen,
  CreateWorkout: CreateWorkout
}, {
    navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName
    }
  }
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft:
        <Icon style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name='md-menu'
          size={30} />
      }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: DashboardStackNavigator },
  Search: SearchScreen,
  WorkoutScreen: WorkoutScreen,
  ExerciseScreen: ExerciseScreen
});

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  WorkoutScreen: { screen: WorkoutScreen },
  ExerciseScreen: { screen: ExerciseScreen }

});

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


