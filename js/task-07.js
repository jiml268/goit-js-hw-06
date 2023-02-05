const sliderValue = document.getElementById("font-size-control");
const  updateFont = document.getElementById("text");
sliderValue.oninput = function(){
    updateFont.style.fontSize = `${this.value}px`
}
