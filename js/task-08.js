const form = document.querySelector(".login-form");
const checkEmail = document.getElementsByName('email')
const checkPassword = document.getElementsByName('password')
const myFormDatarm = document.querySelector('form');

const userArrray = []

form.addEventListener("submit", checkInput) 

function checkInput(event) {
  checkEmail[0].value = checkEmail[0].value.trim()
  checkPassword[0].value = checkPassword[0].value.trim()
  event.preventDefault();
  if (checkEmail[0].value.length === 0 || checkPassword[0].value.length === 0) {
    alert ("Please fill in all the fields!");
  } else {

    const data = new FormData(myFormDatarm);
    const compleatInfo = Object.fromEntries(data)

    console.log(compleatInfo)     
  event.currentTarget.reset();
  }
}
  