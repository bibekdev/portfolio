const navbar = document.querySelector(".nav");
const navbaroffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".nav-link");

const progress = document.querySelector(".progress-bar-wrapper");

const progressBarPercents = [87, 80, 74, 70, 63, 85];

window.addEventListener("scroll", () => {
  mainFuction();
});

const mainFuction = () => {
  if (window.pageYOffset >= navbaroffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, idx) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[idx].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, idx) => {
      el.style.width = `${progressBarPercents[idx]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[idx];
    });
  }
};
mainFuction();

window.addEventListener("resize", () => {
  window.location.reload();
});
