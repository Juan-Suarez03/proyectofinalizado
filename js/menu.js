const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const boton4 = document.querySelector(".boton4");
const boton5 = document.querySelector(".boton5");
const boton6 = document.querySelector(".boton6");

// console.log(menu);
// console.log(hamburguer);

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
  boton1.classList.toggle("show1");
  boton2.classList.toggle("show2");
  boton3.classList.toggle("show3");
  boton4.classList.toggle("show4");
  boton5.classList.toggle("show5");
  boton6.classList.toggle("show6");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
    boton1.classList.toggle("show1");
    boton2.classList.toggle("show2");
    boton3.classList.toggle("show3");
    boton4.classList.toggle("show4");
    boton5.classList.toggle("show5");
    boton6.classList.toggle("show6");
  }
});