let i = 0
const slideImages = []
const time = 8000

slideImages[0] = "./assets/image1.jpg"
slideImages[1] = "./assets/image2.jpg";
slideImages[2] = "./assets/image3.jpg";

const heroBg = document.querySelector(".hero")

function changeImg() { 
  heroBg.style.backgroundImage =`url(${slideImages[i]})`

  if (i < slideImages.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout(changeImg,time)
}

window.addEventListener("load", changeImg);

const about = document.querySelector(".about");
const observer = new IntersectionObserver(function (entries) {
  console.log(entries);
}, { threshold: 1});

observer.observe(about)
