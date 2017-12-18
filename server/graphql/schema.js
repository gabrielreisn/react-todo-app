import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {todoQueries, todoMutations} from './todo/todo';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...todoQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...todoMutations,
    }),
  }),
});
