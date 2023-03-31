import { Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PopularProducts({ title, store, price, category, image }) {
  return (
    <>
   
    
    <Card className="mb-4" style={{ width: "16rem" }}>
      <Card.Img variant="top" src={image.imgFront} />
      <Card.Body>
        <Card.Text>{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{store}</Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Card.Link href="#">{price.price}</Card.Link>
        <Card.Link href="#">{price.discount}</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default PopularProducts;
