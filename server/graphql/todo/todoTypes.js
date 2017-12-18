import {
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLBoolean,
} from 'graphql';

const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  description: 'describes todo type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    checked: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

const TodoInputType = new GraphQLInputObjectType({
  name: 'TodoInputType',
  description: 'Todo payload definition',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    checked: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  }),
});

export {TodoType, TodoInputType};
