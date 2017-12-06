import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import TodoItem from './TodoItem';

//using external inline-style to minimize re-render problems
const paperStyle = {
  width: '35%',
  height: '70vh',
  margin: 'auto',
};

const textFieldStyle = {
  rootElement: {
    width: '75%',
    marginBottom: '40px',
    marginTop: '20px',
  },
  defaultColor: {color: '#ed7224'},
  underline: {borderColor: '#ed7224'},
};

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      console.log('save currrent todo item');
    }
  }

  render() {
    return (
      <Paper style={paperStyle} zDepth={4}>
        <TextField
          hintText="Hit a new todo and press Enter!"
          floatingLabelText="Todo Title:"
          fullWidth={true}
          style={textFieldStyle.rootElement}
          underlineFocusStyle={textFieldStyle.underline}
          floatingLabelFocusStyle={textFieldStyle.defaultColor}
          onKeyPress={this.handleKeyPress}
        />

        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Paper>
    );
  }
}

export default TodoContainer;
