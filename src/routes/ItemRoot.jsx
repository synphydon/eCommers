import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar"
import ItemDetail from "../components/ItemDetail"

function ItemRoot () {
    const params = useParams();
    return (
        <div>
            <NavBar />
            <ItemDetail idProducto={params.idProducto} />
        </div>
    )
}

export default ItemRoot 