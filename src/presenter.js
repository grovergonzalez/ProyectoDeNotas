import { CrearNota } from "./CrudNotas";

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
const tituloNota = document.querySelector("#TituloNota");
const descripcionNota = document.querySelector("#DescripcionNota");
const formCrearNota = document.querySelector("#Crear-Form");
const divCrearNota = document.querySelector("#Crear-div");

formCrearNota.addEventListener("submit", (event) => {
  event.preventDefault();
  const fechaActual = new Date();
  const nota = CrearNota(tituloNota.value, descripcionNota.value);
  event.preventDefault();
  notas.push(nota);
  var NotasCompletas = notas.map(function (nota) {
    return (
      "<p> Titulo: " +
      nota.titulo +
      "</p>" +
      "<p> Texto: " +
      nota.descripcion +
      "</p>" +
      "<p> Fecha: " +
      nota.fecha.getDay() +
      "/" +
      nota.fecha.getMonth() +
      "/" +
      nota.fecha.getFullYear() +
      "</p>" +
      "<br>"
    );
  });
  divCrearNota.innerHTML = NotasCompletas ;
});