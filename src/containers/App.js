import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen
});

const DashboardTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen
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
  Search: SearchScreen
});

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen }
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

