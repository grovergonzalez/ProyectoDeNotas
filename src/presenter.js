
const NotaAbuscar = document.querySelector("#BuscarNota");
const formBuscar = document.querySelector("#Buscar-Form");
const divBuscar = document.querySelector("#Buscar-div");

formBuscar.addEventListener("submit", (event) => {
  event.preventDefault();

  divBuscar.innerHTML = "Nota Encontrada: " + NotaAbuscar.value ;
});

let notas = [];
window.onload = function () {
  window.notas = [];
};
const formCrearNota = document.querySelector("#Crear-Form");
const divCrearNota = document.querySelector("#Crear-div");
formCrearNota.addEventListener("submit", (event) => {
  event.preventDefault();
  const fechaActual = new Date();

  divCrearNota.innerHTML = "La Nota ha sido creada correctamente el " + fechaActual ;
});