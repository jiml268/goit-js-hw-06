function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberEnter = document.querySelector('input[type="number"]');
let createDiv = document.querySelector('button[data-create]');
createDiv.addEventListener('click', (event) => {
  if (numberEnter.value > 100) {
    alert('enter 1 - 100')
    return
  } else{
    createBoxes(numberEnter.value)
}
})
let destoyDiv = document.querySelector('button[data-destroy]');
destoyDiv.addEventListener('click', (event) => {
  const destroyDiv =  document.getElementById("boxes");
  const destroyChild = destroyDiv.children
for ( let i = destroyChild.length-1; i >= 0 ; i--){
  destroyChild[i].remove()
}
})
function createBoxes(amount){
let boxSize = 30
  const getDiv = document.querySelector("#boxes")

for (let i = 1; i <= amount; i++){
  const getBoxColor = getRandomHexColor()
  const showElement = document.createElement("div")
  showElement.style.cssText = `width: ${boxSize}px; height:  ${boxSize}px; background-color: ${getBoxColor}`
  getDiv.append(showElement)
  boxSize += 10 
}
}


