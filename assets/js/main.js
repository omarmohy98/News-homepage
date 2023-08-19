let openDropMenuElement = document.querySelector(".drop-menu");
let closeDropMenuElement = document.querySelector(".close img");
let navElement = document.querySelector(".nav-links");

openDropMenuElement.addEventListener("click", () => {
  navElement.style.display = "flex";
});

closeDropMenuElement.addEventListener("click", () => {
  navElement.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 920) {
    navElement.style.display = "flex";
  } else {
    navElement.style.display = "none";
  }
});
