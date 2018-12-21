/* @flow */

import * as React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import styled from 'styled-components';

import TodoItem from './TodoItem';
import { paperStyle, textFieldStyle } from './styles';

const ItemWrapper = styled.div`
  max-height: 45vh;
  overflow-y: auto;
`;

type Props = {
  addRandomPokemon: () => void,
  addTodoItem: (item: string) => void,
  removeTodoItem: (key: number) => void,
  todoItems: [
    {
      key: number,
      text: string,
    },
  ],
};

type State = {
  textField: string,
};

class TodoList extends React.PureComponent<Props, State> {
  state = {
    textField: '',
  };

  handleKeyPress = (evt: SyntheticEvent<HTMLInputElement>): void => {
    if (evt.key === 'Enter') {
      evt.preventDefault();

      const { textField } = this.state;
      this.props.addTodoItem(textField);
      this.setState({ textField: '' });
    }
  };
  handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ textField: event.currentTarget.value });
  };

  render() {
    const { todoItems, removeTodoItem, addRandomPokemon } = this.props;
    return (
      <Paper style={paperStyle} zDepth={4}>
        <RaisedButton
          fullWidth
          label="Add some random stuff!"
          onClick={addRandomPokemon}
        />
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
          {todoItems.map(
            elem =>
              elem.text && (
                <TodoItem
                  text={elem.text}
                  onRemove={removeTodoItem}
                  elementKey={elem.key}
                  key={elem.key}
                />
              )
          )}
        </ItemWrapper>
      </Paper>
    );
  }
}

export default TodoList;
