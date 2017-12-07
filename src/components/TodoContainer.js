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
    this.state = {
      textField: '',
      todoText: [],
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      let text = this.state.textField;
      let todoArray = [...this.state.todoText];
      todoArray.unshift(text);

      this.setState({
        todoText: todoArray,
        textField: '',
      });
    }
  }

  handleChange(event) {
    this.setState({
      textField: event.target.value,
    });
  }

  deleteFunction(todoText) {
    let newTodoList = [...this.state.todoText];
    let index = newTodoList.findIndex(elem => elem === todoText);
    newTodoList.splice(index, 1);

    this.setState({
      todoText: newTodoList,
    });
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
          value={this.state.textField}
          onChange={this.handleChange}
        />
        {this.state.todoText.map((elem, i) => <TodoItem text={elem} remove={() => this.deleteFunction(elem)} />)}
      </Paper>
    );
  }
}

export default TodoContainer;
