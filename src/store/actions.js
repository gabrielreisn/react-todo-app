// @flow

import { ADD_TODO_ITEM, REMOVE_TODO_ITEM } from './actionTypes';

export const addTodoItem = (item: String): Object => ({
  type: ADD_TODO_ITEM,
  item,
});

export const removeTodoItem = (key: number): Object => ({
  type: REMOVE_TODO_ITEM,
  key,
});
