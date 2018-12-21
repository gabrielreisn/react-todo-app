import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './actionTypes';

const initialState = {
  todoItems: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      const textElem = { key: Math.random(), text: action.item };
      const newList = Array.from(state.todoItems);

      newList.unshift(textElem);

      return {
        ...state,
        todoItems: newList,
      };
    }

    case REMOVE_TODO_ITEM: {
      const { todoItems } = state;
      const filteredList = todoItems.filter(
        element => element.key !== action.key
      );

      return {
        ...state,
        todoItems: filteredList,
      };
    }

    default:
      return state;
  }
};

export default todoListReducer;
