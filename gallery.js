const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal-wrapper");
const activeImg = document.querySelector(".modal img")
const allGalleryImg = document.querySelectorAll(".col img");


// console.log(activeImg.setAttribute());
// console.log(allGalleryImg);

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains('visible')) {
    modal.classList.remove("visible");
  }
  
});

allGalleryImg.forEach((galleryImg) => {
  galleryImg.addEventListener("click", (e) => {
    const imgSrc = e.target.attributes.src.nodeValue;
    modal.classList.add('visible')
    activeImg.setAttribute("src", `${imgSrc}`);
  });
})

const navObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      nav.classList.remove("darkNav");
    } else {
      nav.classList.add("darkNav");
    }
  },
  { threshold: 1 }
);

navObserver.observe(header);
