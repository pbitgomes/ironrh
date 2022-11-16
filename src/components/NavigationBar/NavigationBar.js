import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
    const location = useLocation()

    // não mostrar a barra de navegação na página inicial (root)
    if(location.pathname === "/") {
        return null
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>IronRH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Página inicial</Link>
                        <Link className="nav-link" to="/funcionarios">Ver funcionários</Link>
                        <Link className="nav-link" to="/cadastrar">Cadastrar novo funcionário</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar