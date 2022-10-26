import rootReducer from '../reducers';

const {applyMiddleware, compose, createStore} = require('redux');
const {default: thunk} = require('redux-thunk');

const middleware = [thunk];

const initialState = {};

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
