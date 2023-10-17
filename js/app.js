// menu icon js
let mobile_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");

mobile_icon.addEventListener("click", () => {
  main_menu.classList.toggle("hidden");
});

// header bg add js
const header = document.getElementById("header");
window.onscroll = function () {
  if (window.scrollY > 10) {
    header.style.backgroundColor = "#191919";
    header.style.padding = "10px 0";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "15px 0";
  }
};

// auto type js
var type = new Typed(".auto-type", {
  strings: ["Designer", "Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
