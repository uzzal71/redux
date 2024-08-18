import { createStore, applyMiddleware } from 'redux';
import { delayActionMiddleware, fetchAsyncMiddleware } from "./middlewares.js";
import {fetchTodos, fetchTodosAgain} from './functions.js';

// initial state
const initialState = {
    todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    }
                ]
            }
        case "todos/todoLoaded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload,
                ]
            }
        default:
            break;
    }
};

// store
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware));

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchTodos);