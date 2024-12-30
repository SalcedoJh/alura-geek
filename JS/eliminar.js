import { conectarAPI } from "./conectarAPI.js";

const lista = document.querySelector("[data-lista]");

async function eliminarProducto(evento){
    if (evento.target.classList.contains("icono")){
        const id = evento.target.dataset.id;

        if(!id){
            alert("No se pudo eliminar el producto");
            return;
        }


        const confirmacion = confirm("¿Estás seguro de eliminar este producto?");
        if (!confirmacion) return;

        try {
            await conectarAPI.eliminarProducto(id);
            evento.target.closest(".product-item").remove();
            alert("Producto eliminado correctamente");

        }
        catch (error){
            console.log("error al eliminar el producto", error);
            alert("No se pudo eliminar el producto");
        }
    }
}

lista.addEventListener("click", evento => eliminarProducto(evento));