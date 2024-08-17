// select dom element
const counterEl = document.getElementById('counter');
const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');

// initial state
let counter = 0;

// event listeners
incrementBtn.addEventListener('click', () => {
    counter++;
    counterEl.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterEl.textContent = counter;
});