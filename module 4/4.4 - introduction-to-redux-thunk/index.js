import { createStore, applyMiddleware } from 'redux';
// import { delayActionMiddleware, fetchAsyncMiddleware } from "./middlewares.js";
import { fetchTodos } from './functions.js';
import { thunk } from 'redux-thunk';

// initail state
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
                        title: action.payload
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
}

// store
const store = createStore(
    todoReducer,
    applyMiddleware(thunk)
);
// applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)

// store subscribers
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "Hard working only way to achieve success"
// });

store.dispatch(fetchTodos);