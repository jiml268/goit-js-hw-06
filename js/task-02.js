const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const addAllli = document.createDocumentFragment();
for ( let ingredient of ingredients){
const addingredient = document.createElement('li');
addingredient.innerHTML = ingredient;
addingredient.className = "item";
addAllli.appendChild(addingredient);
}
const ulingredients = document.getElementById('ingredients');
ulingredients.appendChild(addAllli)