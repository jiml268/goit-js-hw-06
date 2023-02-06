const form = document.querySelector(".login-form");
const checkEmail = document.getElementsByName('email')
const checkPassword = document.getElementsByName('password')

const userArrray = []
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkEmail[0].value.trim().length === 0 || checkPassword[0].value.trim().length === 0) {
    alert ("Please fill in all the fields!");
  } else {

    const myFormDatarm = document.querySelector('form');
    const data = new FormData(myFormDatarm);
    const compleatInfo = Object.fromEntries(data)

    console.log(compleatInfo)     
  event.currentTarget.reset();
  }
})
