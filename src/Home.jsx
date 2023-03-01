import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function Home ({cantidadArticulos}) {
    console.log(cantidadArticulos)
    return (
        <div>
            <div>
                <NavBar cantidadArticulos={cantidadArticulos} />
            </div>
            <div style={{"padding-left":"5%", "padding-right":"5%", "textAlign":"center"}}> 
                <ItemListContainer titulo="Mochila marinera SPLASH" importe="$6.500,00" cuotas="HASTA 12 CUOTAS" imagen="MochilaRoja.png"/>
                <ItemListContainer titulo="Mochila marinera SPLASH" importe="$7.500,00" cuotas="HASTA 12 CUOTAS" imagen="MochilaAmarilla.png"/>
                <ItemListContainer titulo="Mochila marinera SPLASH" importe="$8.500,00" cuotas="HASTA 12 CUOTAS" imagen="MochilaNegra.png"/>
            </div>
        </div>
    )
}

export default Home