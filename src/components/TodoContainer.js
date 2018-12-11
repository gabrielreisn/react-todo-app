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

      const textElem = {
        key: Math.random(),
        text: this.state.textField,
      };

      const { todoText } = this.state;
      todoText.unshift(textElem);

      this.setState({
        todoText: todoText,
        textField: '',
      });
    }
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({
      textField: event.currentTarget.value,
    });
  };

  deleteElement = (key: number): void => {
    const { todoText } = this.state;
    const newTodoList = todoText.filter(element => element.key !== key);

    this.setState({
      todoText: newTodoList,
    });
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
            elem =>
              elem.text && (
                <TodoItem
                  text={elem.text}
                  onRemove={() => this.deleteElement(elem.key)}
                  key={elem.key}
                />
              )
          )}
        </ItemWrapper>
      </Paper>
    );
  }
}

export default TodoContainer;
