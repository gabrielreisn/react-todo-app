import { connect } from 'react-redux';
import faker from 'faker';

import TodoList from '../components/TodoList';
import { fetchRandomPokemon } from '../helpers/pokeAPI';

import { addTodoItem, removeTodoItem } from '../store/actions';
import { selectTodoItems } from '../store/selectors';

const addRandomPokemon = () => {
  return function(dispatch) {
    return fetchRandomPokemon().then(pokemonName => {
      dispatch(addTodoItem(`${faker.hacker.phrase()} with ${pokemonName}`));
    });
  };
};

const mapStateToProps = state => ({
  todoItems: selectTodoItems(state),
});

const mapDispatchToProps = dispatch => ({
  addTodoItem: item => dispatch(addTodoItem(item)),
  removeTodoItem: key => dispatch(removeTodoItem(key)),
  addRandomPokemon: () => dispatch(addRandomPokemon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
