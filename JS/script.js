//funciones del formulario
const addProductIcon = document.querySelector(".add");
const formulario = document.getElementById("formulario-agregar-producto");
const cerrarFormulario = document.getElementById("cerrar-formulario");
const limpiarFormulario = document.getElementById("limpiar-formulario");


addProductIcon.addEventListener("click", () => {
  formulario.style.display = "block"; 
  document.body.classList.add("modal-open"); 
});

cerrarFormulario.addEventListener("click", () => {
  formulario.style.display = "none"; 
  document.body.classList.remove("modal-open"); 
});

limpiarFormulario.addEventListener("click", () => {
  formulario.querySelectorAll("input").forEach(input => input.value = "");
});
