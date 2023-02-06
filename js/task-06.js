let typeSymbols = document.querySelector('input[type="text"]');
typeSymbols.addEventListener('input', (event) => {
    const listWithType = document.getElementsByTagName("input");  
    console.log(listWithType)
    if(typeSymbols.value.length === 0){
        listWithType[0].className = "validation-input"
    } else {
        listWithType[0].style.outline = "none"
        if(typeSymbols.value.length === parseInt(listWithType[0].getAttribute('data-length'))){
            listWithType[0].classList = "valid"
        } else {
            listWithType[0].classList = "invalid"
        }
    }
});