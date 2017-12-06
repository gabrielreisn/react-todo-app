import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import TodoItem from './TodoItem';

//using external inline-style to minimize re-render problems
const cardStyle = {
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
      <Card style={cardStyle}>
        <CardHeader title=" " />

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
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
          Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui
          mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default TodoContainer;
