let typeSymbols = document.querySelector('button[class="change-color"]');
typeSymbols.addEventListener('click', function() {
const newColor =  getRandomHexColor()
document.body.style.backgroundColor = newColor
const spanColor = document.querySelector('span[class="color"]')
spanColor.innerHTML = `- ${newColor}`
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
