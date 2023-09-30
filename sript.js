const mob = document.querySelector(".topnav");

function run() {
  mob.classList.toggle("dark");
}

// document.querySelector("#hamb").onclick = run;

mob.addEventListener('click', run)