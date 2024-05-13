let i = 0
const slideImages = []
const time = 6000

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
const potrait = document.querySelector(".potraits")
const nav = document.querySelector(".nav")
const aboutText = document.querySelector(".about-text");

const observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    aboutText.style.margin = "0"
  }
}, { threshold: 0.8 });

const navObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      nav.classList.add("darkNav");
    } else {
      nav.classList.remove("darkNav");
    }
  },
  {threshold: 0.1,}
);

observer.observe(about)
navObserver.observe(potrait)
