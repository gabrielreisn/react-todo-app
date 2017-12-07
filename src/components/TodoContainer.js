/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import styled from 'styled-components';

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

const ItemWrapper = styled.div`
  max-height: 45vh;
  overflow-y: auto;
`;

type Props = {
  /* ... */
};

type State = {
  textField: string,
  todoText: Array<string>,
};

class TodoContainer extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      textField: '',
      todoText: [],
    };
  }

  handleKeyPress(evt: SyntheticEvent<HTMLElement>) {
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

  handleChange(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({
      textField: event.currentTarget.value,
    });
  }

  deleteFunction(todoText: string) {
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
          onKeyPress={this.handleKeyPress.bind(this)}
          value={this.state.textField}
          onChange={this.handleChange.bind(this)}
        />
        <ItemWrapper>
          {this.state.todoText.map((elem, i) => (
            <TodoItem text={elem} remove={() => this.deleteFunction(elem)} key={i} />
          ))}
        </ItemWrapper>
      </Paper>
    );
  }
}

export default TodoContainer;
