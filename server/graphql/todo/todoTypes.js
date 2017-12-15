import {GraphQLString, GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLBoolean} from 'graphql';

const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  description: 'describes todo type definition',
  fields: () => ({
    id: {
      type: new GraphQLID(),
    },
    email: {
      type: new GraphQLString(),
    },
    text: {
      type: new GraphQLString(),
    },
    checked: {
      type: new GraphQLBoolean(),
    },
  }),
});

const TodoInputType = new GraphQLInputObjectType({
  name: 'TodoInputType',
  description: 'User payload definition',
  fields: () => ({
    email: {
      type: new GraphQLString(),
    },
    text: {
      type: new GraphQLString(),
    },
    checked: {
      type: new GraphQLBoolean(),
    },
  }),
});

export {TodoType, TodoInputType};
