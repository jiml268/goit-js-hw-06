const form = document.querySelector(".login-form");
const userArrray = []
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkEmail = document.getElementsByName('email')
  const checkPassword = document.getElementsByName('password')
  

  if (checkEmail[0].value.length === 0 || checkPassword[0].value.length === 0) {
    alert ("Please fill in all the fields!");
  } else {

    const myFormDatarm = document.querySelector('form');
    const data = new FormData(myFormDatarm);
    const zzz = Object.fromEntries(data)

    console.log(zzz)


/*
    let myFormData = {
      email: document.getElementsByName('email')[0].value,
      password: document.getElementsByName('password')[0].value
    } 
    userArrray.push(myFormData)
console.log(userArrray)
*/      
  event.currentTarget.reset();
  }
})
