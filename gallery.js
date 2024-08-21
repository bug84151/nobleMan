const header = document.querySelector("header");
const nav = document.querySelector(".nav");

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
