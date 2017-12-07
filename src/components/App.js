import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoContainer from '../components/TodoContainer';

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

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <img src={logo} className="App-logo" alt="logo" />
          <AppTitle>Welcome to To-Do App</AppTitle>
        </AppHeader>
        <AppIntro />
        <MuiThemeProvider>
          <TodoContainer />
        </MuiThemeProvider>
      </AppWrapper>
    );
  }
}

export default App;
