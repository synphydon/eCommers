import NavBar from "./components/NavBar"

function About ({cantidadArticulos}) {
    return (
        <div>
            <NavBar cantidadArticulos={cantidadArticulos} />
            <p>Pagina de Contacto</p>
        </div>
    )
}

export default About