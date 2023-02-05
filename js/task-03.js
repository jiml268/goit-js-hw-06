const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let pictureGallary ="";
for ( let i = 0; i < images.length; i++){
  pictureGallary += `<li> <img src = "${images[i].url}" alt = "${images[i].alt}"  width = 300px height = 200px class = "imageitem"></li>; `
}
const subject = document.querySelector('.gallery');
subject.insertAdjacentHTML("afterbegin",pictureGallary);



document.getElementsByClassName("gallery")[0].style.listStyleType = "none"; 
document.getElementsByClassName("gallery")[0].style.display= "flex";
document.getElementsByClassName("gallery")[0].style.flexWrap= "wrap";


