
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
const NavbarMain = () => {
  return (
    <>
         <Navbar className='navBg' bg="light" variant="light">
            <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/Main">Blog</Nav.Link>
            <Nav.Link as={Link} to="/User">Caracteristicas</Nav.Link>
            <Nav.Link as={Link} to="/Clientes">Clientes</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <section>

          <Outlet>

          </Outlet>

        </section>

        
    </>
  )
}

export default NavbarMain