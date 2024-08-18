import fetch from "node-fetch";

export const delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === "todos/todoAdded") {
        console.log("I am delaying you!");

        setTimeout(() => {
            next(action);
        }, 2000);

        return;
    }

    return next(action);
}

export const delayActionMiddleware2 = (store) => (next) => (action) => {
    if (action.type === "todos/todoAdded") {
        console.log("I am delaying you 2 seconds!");

        setTimeout(() => {
            next(action);
        },200);

        return;
    }

    return next(action);
}

export const fetchTodosMiddleware = (store) => (next) => async(action) => {
    if (action.type === "todos/fetchTodos") {
        console.log("I am fetching todos from an API!");

        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

        const todos = await response.json();

        store.dispatch({
            type: "todos/todoLoaded",
            payload: todos,
        });
        
        console.log(
            `Number of updated todos: ${store.getState().todos.length}`
        );

        return;
    }

    return next(action);
}