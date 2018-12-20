import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

const middlewares = [];

export default createStore(reducer, applyMiddleware(...middlewares));
