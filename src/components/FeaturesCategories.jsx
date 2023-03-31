import { Card, Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function FeaturesCategories() {
  return (
    <>
      <Navbar variant="light">
        <Container fluid>
          <h2 className='me-4'>Features Categories</h2>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navlink'>Cake & Milk</Nav.Link>
            <Nav.Link href="#features" className='navlink'>Coffes & Teas</Nav.Link>
            <Nav.Link href="#pricing" className='navlink'>Pet Foods</Nav.Link>
            <Nav.Link href="#pricing" className='navlink'>Vegetables</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="cards">
        <div className="card card1">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card2">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-12.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card3">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-11.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card4">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-9.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card5">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-3.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card6">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card7">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card8">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-4.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card9">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-5.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
        <div className="card card10">
            <div className="image">
            <img className='pimage' src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png" alt="" />
            </div>
            <h4 className='name'>Cake & Milk</h4>
            <p className='itm'>11 items</p>
        </div>
      </div>

      <div className="bigCards">
        <div className="bigCard bgimg1">
            <div className="textbtn">
            <h3>Everday Fresh & Clean with Our Products</h3>
            <button>Shop Now <i class="fad fa-arrow-square-right"></i></button>
            </div>
        </div>
        <div className="bigCard bgimg2">
        <div className="textbtn">
            <h3>Everday Fresh & Clean with Our Products</h3>
            <button>Shop Now <i class="fad fa-arrow-square-right"></i></button>
            </div>
        </div>
        <div className="bigCard bgimg3">
        <div className="textbtn">
            <h3>Everday Fresh & Clean with Our Products</h3>
            <button>Shop Now <i class="fad fa-arrow-square-right"></i></button>
            </div>
        </div>
      </div>

    </>
  );
}

export default FeaturesCategories;