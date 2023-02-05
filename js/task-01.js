const listWithClass = document.getElementById("categories");
const listLi =listWithClass.getElementsByTagName('li');

let totalCat = 0
let report = ""
for (var i = 0; i< listLi.length; i++) {
    if (listLi[i].getElementsByTagName('h2').length > 0){
    const  elementUl= listLi[i].getElementsByTagName('ul')
    report += 
    `
    Category: ${listLi[i].getElementsByTagName('h2')[0].innerHTML}
    Elements: ${elementUl[0].getElementsByTagName('li').length}
    `
    totalCat ++
    } 
}
console.log(`   Number of categories: ${totalCat}

    ${report}`)

