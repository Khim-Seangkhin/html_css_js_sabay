
const btn = document.getElementById("menu-btn");
const nav = document.querySelector(".menu");
btn.onclick = () => {
  nav.classList.toggle("show");
  btn.classList.toggle("fa-times");
};

window.onscroll = () => {
  nav.classList.remove("show");
  btn.classList.remove("fa-times");
};

