const displayTotal = document.getElementById('value');
let clickDecrement = document.querySelector('button[data-action="decrement"]');
let clickIncrement = document.querySelector('button[data-action="increment"]');

let counter = 0;
displayTotal.innerHTML = counter;

clickDecrement.addEventListener('click', handleDecrease);
clickIncrement.addEventListener('click', handleIncrease);


function handleDecrease(e){
    counter--
displayTotal.innerHTML = counter;
}

function handleIncrease(e){
    counter++
displayTotal.innerHTML = counter;
}

