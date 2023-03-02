
const NotaAbuscar = document.querySelector("#BuscarNota");
const form = document.querySelector("#Buscar-Form");
const div = document.querySelector("#Buscar-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "Nota Encontrada: " + NotaAbuscar.value ;
});
