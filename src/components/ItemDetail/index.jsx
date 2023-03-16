import { useEffect, useState } from "react";
import productos from "../../mocks/productos";
import ItemDetailDetail from "../ItemDetailDetail";


function ItemDetail ({idProducto}) {
    const [Producto, setProducto] = useState([]);

    useEffect(() => {
        const buscaProducto = new Promise( (resolve, reject) => {
            setTimeout(() => {
               resolve(productos);
            }, 800);
        });

        buscaProducto.then((response) => {
            const productoSeleccionado = response.filter((producto) => producto.id === parseInt(idProducto))
            console.log(productoSeleccionado);
            setProducto(productoSeleccionado);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
   
    return (
        <div>
            <ItemDetailDetail producto={Producto} />
        </div>
    )
}

export default ItemDetail