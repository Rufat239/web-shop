import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Container fluid className="mt-4">
      <Carousel>
        <Carousel.Item>
          <div className="bg-image bg-image1">
            <div className="text">
              <h2>Fresh Vegetables Big Discount</h2>
              <p>Save up to 50% on of your first order</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-image bg-image2">
            <div className="text">
              <h2>Don't miss amazing grocery deals</h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
