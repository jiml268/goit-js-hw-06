let typeSymbols = document.querySelector('input[type="text"]');
typeSymbols.addEventListener('blur', (event) => {
    const listWithType = document.getElementsByTagName("input");  
    if(typeSymbols.value.length === 0){
        listWithType[0].className = "validation-input"
    } else {
        if(typeSymbols.value.length === parseInt(listWithType[0].getAttribute('data-length'))){
            listWithType[0].classList = "valid"
        } else {
            listWithType[0].classList = "invalid"
        }
    }
});
