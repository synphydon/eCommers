import "./ItemDetailDetail.css"

function ItemDetailDetail ({producto}) {
    const itemsProductos = producto.map( (p) => 
        <div className="boxItem">
            <div className="textCenter">
                <img className="normalImage" src={p.imagen} alt="imagen"/>
            </div>
            <div className="textCenter">
                <div>{p.descripcion}</div>
                <div><b>${p.importe.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</b></div>
                <div>{p.descripcionMetodoDePago}</div>
            </div>
        </div>
    )

    return (
        <div>
            {itemsProductos}
        </div>
    )
}

export default ItemDetailDetail