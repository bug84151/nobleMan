let i = 0
const slideImages = []
const time = 8000

slideImages[0] = "./assets/image1.jpg"
slideImages[1] = "./assets/image2.jpg";
slideImages[2] = "./assets/image3.jpg";

function changeImg() { 
  document.slide.src = slideImages[i]

  if (i < slideImages.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout(changeImg,time)
}

window.addEventListener("load", changeImg);