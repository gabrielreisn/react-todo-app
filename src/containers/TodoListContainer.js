import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

import { addTodoItem, removeTodoItem } from '../store/actions';
import { selectTodoItems } from '../store/selectors';

const mapStateToProps = state => ({
  todoItems: selectTodoItems(state),
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: item => dispatch(addTodoItem(item)),
  removeTodoItem: key => dispatch(removeTodoItem(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
