import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container fluid className="justify-content-between">
        <div>
          <Link to="/" className="text-white  text-decoration-none">
            🏠Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            📒Contacto
          </Link>
        </div>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="ms-auto">Happy Cake🎂</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
