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

//////////////////////// FOOTER ///////////////////////

// make the copy right text and make the year dinameic
let copy = document.getElementById("footer");
let year = new Date().getFullYear();
copy.innerHTML = `Copyright © ${year} Goal All rights reserved. The information contained in
        Match may not be published, broadcast, rewritten, or redistributed
        without the prior written authority of Match`;
