import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./itemList.css"

function ItemList ({productos}) {
    const navigate = useNavigate();
    const itemsProductos = productos.map( (producto) => 
        <div className="boxItemList" onClick={() => navigate(`/item/${producto.id}`)}>
            <div>
                <img className="smallImage" src={producto.imagen} alt="imagen"/>
            </div>
            <div className="textCenter">
                <div>{producto.descripcion}</div>
                <div><b>${producto.importe.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</b></div>
                <div>{producto.descripcionMetodoDePago}</div>
            </div>
        </div>
    )
   
    return (
        <div>
            {itemsProductos}
        </div>
    )
}

export default ItemList