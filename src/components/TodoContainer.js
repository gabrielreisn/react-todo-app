/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import styled from 'styled-components';

import TodoItem from './TodoItem';
import { paperStyle, textFieldStyle } from './styles';

const ItemWrapper = styled.div`
  max-height: 45vh;
  overflow-y: auto;
`;

type Props = {
  /* ... */
};

type State = {
  textField: string,
  todoText: Array<Object>,
};

class TodoContainer extends React.Component<Props, State> {
  state = {
    textField: '',
    todoText: [],
  };

  handleKeyPress = (evt: SyntheticEvent<HTMLInputElement>): void => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      let textElem = {
        text: this.state.textField,
      };
      let todoArray = [...this.state.todoText];
      todoArray.unshift(textElem);

      this.setState({
        todoText: todoArray,
        textField: '',
      });
    }
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({
      textField: event.currentTarget.value,
    });
  };

  deleteElement = (todoItem: Object): void => {
    let newTodoList = [...this.state.todoText];
    let index = newTodoList.findIndex(elem => elem.key === todoItem.key);
    newTodoList.splice(index, 1);

    this.setState({
      todoText: newTodoList,
    });

    /** 
    const { todoText } = this.state;
    const newTodoList = todoText.filter(
      element => element.text === todoItem.text
    );

    this.setState({
      todoText: newTodoList,
    });
    */
  };

  render() {
    const { todoText } = this.state;
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
        <ItemWrapper>
          {todoText.map(
            (elem, index) =>
              elem.text && (
                <TodoItem
                  text={elem.text}
                  onRemove={() => this.deleteElement(elem)}
                  key={`${index}-${elem.text}`}
                />
              )
          )}
        </ItemWrapper>
      </Paper>
    );
  }
}

export default TodoContainer;
