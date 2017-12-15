import {GraphQLList, GraphQLNonNull} from 'graphql';
import {internet, random, lorem} from 'faker';

import {TodoType, TodoInputType} from './todoTypes';

const todoQueries = {
  todos: {
    type: new GraphQLList(TodoType),
    resolve: async () => {
      const todos = await new Promise(resolve =>
        setTimeout(
          () =>
            resolve(
              new Array(10).fill(undefined).map(() => ({
                id: random.uuid(),
                email: internet.email(),
                tex: lorem.word(),
                checked: random.boolean(),
              }))
            ),
          100
        )
      );
      return todos;
    },
  },
};

const todoMutations = {
  createTodo: {
    type: TodoType,
    args: {
      input: {
        type: new GraphQLNonNull(TodoInputType),
      },
    },
    resolve: async (rootValue, {input}) => {
      const result = await new Promise(resolve => {
        setTimeout(
          () =>
            resolve(
              Object.assign(input, {
                id: random.uuid(),
              })
            ),
          100
        );
      });
      return result;
    },
  },
};

export {todoQueries, todoMutations};
