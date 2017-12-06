import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import TodoItem from './TodoItem';

//using external inline-style to minimize re-render problems
const paperStyle = {
  width: '900px',
  height: '660px',
  margin: 'auto',
};

const textFieldStyle = {
  rootElement: {width: '75%'},
  defaultColor: {color: '#ed7224'},
  underline: {borderColor: '#ed7224'},
};

class TodoContainer extends Component {
  render() {
    return (
      <Paper style={paperStyle} zDepth={4}>
        <TextField
          hintText="Hit a new todo"
          floatingLabelText="Todo Title:"
          fullWidth={true}
          style={textFieldStyle.rootElement}
          underlineFocusStyle={textFieldStyle.underline}
          floatingLabelFocusStyle={textFieldStyle.defaultColor}
        />

        <TextField
          hintText="What you really need to do?"
          floatingLabelText="Todo Content:"
          fullWidth={true}
          style={textFieldStyle.rootElement}
          underlineFocusStyle={textFieldStyle.underline}
          floatingLabelFocusStyle={textFieldStyle.defaultColor}
        />

        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Paper>
    );
  }
}

export default TodoContainer;
