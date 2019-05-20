import React, { Component } from 'react';
import AppContainer from '../AppContainer';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


