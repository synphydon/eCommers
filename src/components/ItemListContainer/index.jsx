import "./ItemListContainer.css"

function ItemListContainer ({imagen, titulo, importe, cuotas}) {
    const pathImage = 'eCommersImages/';
    return (
        <div className="boxItemList">
            <div>
                <img className="smallImage" src={`${pathImage}/${imagen}`}></img>
            </div>
            <div className="textCenter">
                <div>{titulo}</div>
                <div><b>{importe}</b></div>
                <div>{cuotas}</div>
            </div>
        </div>
    )
}

export default ItemListContainer