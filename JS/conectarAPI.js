async function listarproductos(){
    const conexion = await fetch("http://localhost:3001/products");

    const conexionConvertida = conexion.json();
    return conexionConvertida;

    //console.log(conexionConvertida);
    
}

async function enviarproducto(descripcion, price, image){
    const conexion = await fetch("http://localhost:3001/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name:descripcion,
            price:price,
            image:image
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id){
    const conexion = await fetch(`http://localhost:3001/products/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!conexion.ok){
        throw new Error("No se pudo eliminar el producto");
    }
    

    return eliminarProducto;
}

export const conectarAPI = {
    listarproductos, enviarproducto, eliminarProducto,
}

//listaproducts();