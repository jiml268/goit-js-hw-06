const sliderValue = document.getElementById("font-size-control");
const updateFont = document.getElementById("text");
updateFont.style.fontSize = `${sliderValue.value}px`
sliderValue.oninput = function(){
    updateFont.style.fontSize = `${this.value}px`
}
