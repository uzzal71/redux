// select dom element
const counterEl = document.getElementById('counter');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');

// initial state
const initialState = {
    value: 0
}

// create reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innterText = state.value;
}

store.subscribe(render);

// button click listeners
incrementBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'INCREMENT'
    })
});

decrementBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'DECREMENT'
    });
});