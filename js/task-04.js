const displayTotal = document.getElementById('value');
let counter = 0;
displayTotal.innerHTML = counter;

let clickDecrement = document.querySelector('button[data-action="decrement"]');
clickDecrement.addEventListener('click', function(e){
    counter--
displayTotal.innerHTML = counter;
})

let clickIncrement = document.querySelector('button[data-action="increment"]');
clickIncrement.addEventListener('click', function(e){
    counter++
displayTotal.innerHTML = counter;
})

