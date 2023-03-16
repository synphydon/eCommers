import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer"
import NavBar from "../components/NavBar"

function Root () {
    const params = useParams();
    const busquedaPorCategoria = Boolean(params.idCategoria)
    
    return (
        <div>
            <NavBar />
            <div style={{"paddingLeft":"5%", "paddingRight":"5%", "textAlign":"center"}}> 
                <ItemListContainer categoriaId={params.idCategoria} busquedaPorCategoria={busquedaPorCategoria} />
            </div>
        </div>
    )
}

export default Root