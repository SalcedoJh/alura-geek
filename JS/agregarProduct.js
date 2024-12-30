
import { conectarAPI } from "./conectarAPI.JS";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();

    const mane = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const imagen = document.querySelector("[data-image]").value;

    await conectarAPI.enviarproducto(mane, precio, imagen);

    window.location.href = "/index.html";
    alert("Producto agregado correctamente");

}

formulario.addEventListener("submit", evento => crearProducto(evento));