import { conectarAPI } from "./conectarAPI.js";
const lista = document.querySelector("[data-lista]");

function crearcard(image, name, price, id){
    const productos = document.createElement("li");
    productos.classList="product-item";
    productos.innerHTML = `<img class="image" src="${image}" alt="">
    <div class="product-info">
        <h2 class="descripcion">${name}</h2>
        <div class="price-trash">
            <p class="price">$ ${price}</p>
            <img class="icono" src="/assets/trash.svg" alt="" data-id="${id}">
         </div>
    </div>`; 

    return productos;
}

async function listarproductos(){
    const listaAPI = await conectarAPI.listarproductos()

    listaAPI.forEach(productos =>lista.appendChild(crearcard(productos.image, productos.name, productos.price, productos.id)));
}

listarproductos();