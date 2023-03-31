import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function Head() {
  return (
    <Navbar bg="light" expand="lg">
      <Container
        fluid
        className="d-flex justify-content-space-between align-items-center"
      >
        <div className="row" style={{ width: "100%" }}>
          <div className="col-2">
            <Navbar.Brand href="#">
              <img
                width="80%"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png"
                alt=""
              />
            </Navbar.Brand>
          </div>
          <div className="col-10 d-flex align-items-center">
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", width: "100%" }}
                navbarScroll
              >
                <div className="col-6">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="success">Search</Button>
                  </Form>
                </div>
                <div className="col-2 width:260px d-flex justify-content-center">
                  <Button variant="outline-success">
                    Became Vendor <i class="fas fa-long-arrow-right"></i>
                  </Button>
                </div>
                <div className="col-4 d-flex">
                  <Nav.Link href="#action1" className="me-2">
                    <i className="fas fa-recycle"></i> Compare
                  </Nav.Link>
                  <Nav.Link href="#action1" className="me-2">
                    <i className="far fa-heart"></i> Wishlist
                  </Nav.Link>
                  <Nav.Link href="#action1" className="me-2">
                  <i class="fas fa-shopping-cart"></i> cart
                  </Nav.Link>
                  <Nav.Link href="#action1" className="me-2">
                    <i className="far fa-user"></i> Account
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Head;
