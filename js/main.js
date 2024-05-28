///////////////////////////////// HEADER ////////////////////////////

// make the toggle in the header
let menu = document.getElementById("menu-icon");

menu.addEventListener("click", () => {
  menu.classList.toggle("clicked");
});

// let the ul go down by clicking
let headerUl = document.getElementById("header-ul");
menu.addEventListener("click", () => {
  if (menu.classList.contains("clicked")) {
    headerUl.style.cssText = "transform: translateY(0)";
  } else {
    headerUl.style.cssText = "transform: translateY(-100%)";
  }
});
