const numberEnter = document.querySelector('input[type="number"]');
let createDiv = document.querySelector('button[data-create]');
let destoyDiv = document.querySelector('button[data-destroy]');
const getDiv = document.querySelector("#boxes")
const destroyDiv =  document.getElementById("boxes");
  const destroyChild = destroyDiv.children

let boxSize = 30

destoyDiv.addEventListener('click', removeDiv);
createDiv.addEventListener('click', addDiv)


function addDiv(){
  if (numberEnter.value > 100) {
    alert('enter 1 - 100')
    return
  } else{
    for (let i = 1; i <= numberEnter.value; i++){
      const getBoxColor = getRandomHexColor()
      const showElement = document.createElement("div")
      showElement.style.cssText = `width: ${boxSize}px; height:  ${boxSize}px; background-color: ${getBoxColor}`
      getDiv.append(showElement)
      boxSize += 10 
    }
}
}

function removeDiv(amount){  
for ( let i = destroyChild.length-1; i >= 0 ; i--){
  destroyChild[i].remove()
}
boxSize = 30
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
