const logo = document.querySelector(".contain");
const menu = document.querySelector(".menu");
const closure = document.querySelectorAll(".menu li");

function hambur() {
  logo.classList.toggle("active");
  menu.classList.toggle("active");
}

function olad() {
  logo.classList.remove("active");
  menu.classList.remove("active");
}

logo.addEventListener("click", hambur);

closure.forEach((item) => item.addEventListener("click", olad));
