let typeName = document.getElementById("name-input");
typeName.addEventListener('keyup', function(e){
    const updateName = typeName.value;
    if (updateName.length > 0){
        document.getElementById("name-output").innerHTML = updateName
    } else { 
        document.getElementById("name-output").innerHTML = "Anonymous";
    }
    
}
)


