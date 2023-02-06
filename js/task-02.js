const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const addAllLi = document.createDocumentFragment();
for ( let ingredient of ingredients){
const addIngredient = document.createElement('li');
addIngredient.innerHTML = ingredient;
addIngredient.className = "item";
addAllLi.appendChild(addIngredient);
}
const ulIngredients = document.getElementById('ingredients');
ulIngredients.appendChild(addAllLi)