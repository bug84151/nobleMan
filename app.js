const heroImg = document.querySelectorAll(".sliderImg");
window.addEventListener("load", function (e) {
  let timer = 1;
    const countIterval = this.setInterval(() => {
    heroImg[timer].classList.add("animate");
    timer++;
    if (timer > 2) {
      timer = 0
    }
  }, 5000);
});

console.log(heroImg);

heroImg.forEach((img) => {
    img.addEventListener("transitionend", (e) => {
        e.target.classList.remove("animate")
    })
})