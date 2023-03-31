import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomeNav() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <div className='btntext'>
          <Button variant='success'><i class="fas fa-vector-square"></i> Browse All Categories</Button>
          <Nav.Link className='textLink' href="#home"><i className="fas fa-fire-alt fire"></i>Hot Deals</Nav.Link>
          </div>
          <Nav className='nav'>         
            <Nav.Link className='textLink me-3' href="#home">Home</Nav.Link>
            <Nav.Link className='textLink me-3' href="#features">About</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Shop</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Vendors</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Mega Menu</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Blog</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Pages</Nav.Link>
            <Nav.Link className='textLink me-3' href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomeNav;