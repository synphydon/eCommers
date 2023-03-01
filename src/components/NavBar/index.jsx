import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImagenLogo from "../../images/logo.jpg"

function NavBar ({cantidadArticulos}) {
    return (
        <div style={{"width":"100%"}}>
            <Row>
                <Col xs={2} style={{"textAlign":"center"}}>
                    <Logo />
                </Col>
                <Col xs={9} className="d-flex align-items-end">
                    <NavigationBar cantidadArticulos={cantidadArticulos} />
                </Col>
            </Row>
        </div>
    )
}

function Logo() {
    return (
        <img src={ImagenLogo}></img>
    )
}

function NavigationBar({cantidadArticulos}) {
    return (
        <Navbar bg="light" style={{"width":"100%"}}>
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <NavDropdown title="Opticas" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Optica 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Optica 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Agregarse como Optica</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#acti">Shop Online</Nav.Link>
                        <Nav.Link href="/about" /*disabled*/>Contacto</Nav.Link>
                        <Nav.Link href="">Registrarme</Nav.Link>
                        <Nav.Link href="">
                            <CartWidget cantidad={cantidadArticulos} />
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar