var express = require('express');
const mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');

var app = express();

// make sure this is done before mongoose.connect() method
mongoose.Promise = global.Promise;

const conn = mongoose.connect('mongodb://localhost:27017/todoApp', {
  useMongoClient: true,
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var schema = buildSchema(`
  type Query {
    hello: String
    name: String
    age: Int
    position: String
    getMessage: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
  name: () => {
    return 'gabriel';
  },
  age: () => {
    return 22;
  },
  position: () => {
    return 'front end developer';
  },
  setMessage: () => {
    return 'front end developer';
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

let SERVER_PORT = 9000;

app.listen(SERVER_PORT, () =>
  console.log('Express server running on port' + SERVER_PORT + '. Now browse to localhost:' + SERVER_PORT + '/graphql')
);
