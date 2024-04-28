window.addEventListener("load", function (e) {
   const heroImg = document.querySelectorAll(".sliderImg");
   let timer = 0;
   const countIterval = this.setInterval(() => {
       console.log("fade in");
       timer++
       if (timer == 4) {
           this.clearInterval(countIterval);
       }
   }, 3000);
})

 