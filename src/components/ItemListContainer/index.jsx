import { useEffect, useState } from "react";

import productos from "../../mocks/productos";
import ItemList from "../ItemList";

function ItemListContainer ({categoriaId, busquedaPorCategoria}) {
    const [lstProductos, setProductos] = useState([]);

    useEffect(() => {

        const productosPromise = new Promise( (resolve, reject) => {
            setTimeout(() => {
               resolve(productos);
            }, 2000);
        });

        productosPromise.then((response) => {
            if (busquedaPorCategoria) {
                const productosPorCategoria = response.filter((producto) => producto.tipo == categoriaId)
                setProductos(productosPorCategoria);
            } else {
                setProductos(response);
            }
        }).catch((err) => {
            console.log(err);
        });

    }, [categoriaId]);

    return (
        <div>
            <ItemList productos={lstProductos} />
        </div>
    )
}

export default ItemListContainer