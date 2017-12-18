import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
});

let SERVER_PORT = 5002;

app.listen(SERVER_PORT, () =>
  console.log(
    'Express server running with graphql on port' +
      SERVER_PORT +
      '. Now browse to localhost:' +
      SERVER_PORT +
      '/graphql'
  )
);
