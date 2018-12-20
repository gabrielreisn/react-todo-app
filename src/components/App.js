// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import logo from '../logo.svg';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoListContainer from '../containers/TodoListContainer';

import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #6c7b8e;
  height: 100vh;
`;

const AppHeader = styled.header`
  background-color: #4b586b;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <AppTitle>Welcome to To-Do App</AppTitle>
      </AppHeader>
      <AppIntro />
      <MuiThemeProvider>
        <TodoListContainer />
      </MuiThemeProvider>
    </AppWrapper>
  </Provider>
);

export default App;
