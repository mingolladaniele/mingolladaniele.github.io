//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuBtn.classList.toggle("close"); //alla classe dell'elemento menuBtn aggiunge o toglie(se presente) la classe 'close'
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  menuBranding.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));
  showMenu = !showMenu;
}

//Breaking H1 in accordance with Windows Width
go();
window.addEventListener("resize", go);

function go() {
  if (window.innerWidth <= 397 && window.innerWidth > 373) {
    document.querySelector("#home-sm").innerHTML =
      "Computer Science Student &<br> ETF Investor";
  } else if (window.innerWidth <= 373 || window.innerWidth == 376) {
    document.querySelector("#home-sm").innerHTML =
      "Computer Science Student <br>&<br> ETF Investor";
  } else {
    document.querySelector("#home-sm").innerHTML =
      "Computer Science Student & ETF Investor";
  }
}
