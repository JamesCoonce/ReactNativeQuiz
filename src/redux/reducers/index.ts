import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { quizReducer } from './quizReducer';

const defaultMiddlewares = [
    thunk,
    promiseMiddleware
];

const root = combineReducers({
    quizReducer: quizReducer
});

const composeMiddlewares = middlewares =>
    compose(
        applyMiddleware(...defaultMiddlewares, ...middlewares)
    );

const initialize = (initialState = {}, middlewares = []) =>
    createStore(root, initialState, composeMiddlewares(middlewares));

export default initialize;

