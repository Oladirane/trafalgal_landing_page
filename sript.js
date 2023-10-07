document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".contain");
  const menu = document.querySelector(".menu");
  const closure = document.querySelectorAll(".menu li");

  function hambur() {
    logo.classList.toggle("active");
    menu.classList.toggle("active");
  }

  function olad() {
    logo.classList.toggle("active");
    menu.classList.toggle("active");
  }

  logo.addEventListener("click", hambur);

  closure.forEach((item) => item.addEventListener("click", olad));

  // Testimonials

  const caro = document.querySelectorAll("#lastly");
  const caroline1 = document.getElementById("carousel1");
  const caroline2 = document.getElementById("carousel2");

  caro.forEach((e) =>
    e.addEventListener("click", () => {
      caroline1.classList.toggle("active");
      caroline2.classList.toggle("active");
    })
  );

  const emmy = document.querySelectorAll("button");

  function matt() {
    alert("This page is Under Construction. Kindly check back later");
  }

  emmy.forEach((ef) => {
    ef.addEventListener("click", matt);
  });
});
