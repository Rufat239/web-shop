import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import PopularProducts from "./PopularProducts";

const Products = () => {
  const [products] = useContext(ProductContext);
  const [data, setData] = useState(products);

  const filterProducts = (category) => {
    const catItem = products.filter((item) => item.category === category);
    if (catItem) {
      setData(catItem);
    } else {
      setData(products);
    }
  };
  return (
    <Container fluid className="my-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="populartext">Popular products</h2>
        <ul className="d-flex align-items-center mb-0">
          <li className="list-unstyled">
            <Button
              variant="none"
              onClick={() => {
                filterProducts("All");
              }}
            >
              All
            </Button>
          </li>
          <li className="list-unstyled">
            <Button
              variant="none"
              onClick={() => {
                filterProducts("Baking material");
              }}
            >
              Baking material
            </Button>
          </li>
          <li className="list-unstyled">
            <Button
              variant="none"
              onClick={() => {
                filterProducts("Fresh Fruit");
              }}
            >
              Fresh Fruits
            </Button>
          </li>
          <li className="list-unstyled">
            <Button variant="none" onClick={()=>{filterProducts("Clothing & beauty")}}>Milks & Dairies</Button>
          </li>
          <li className="list-unstyled">
            <Button variant="none" onClick={()=>{filterProducts("Fresh Seafood")}}>Meats</Button>
          </li>
          <li className="list-unstyled">
            <Button variant="none" onClick={()=>{filterProducts("Deals Of The Day")}}>Vegetables</Button>
          </li>
        </ul>
      </div>
      <Row className="popular">
        {data.length === 0 ? products.slice(0, 10).map((product) => {
          return (
            <PopularProducts
              title={product.title}
              store={product.store}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          );
        }) : data.map((product) => {
            return (
              <PopularProducts
                title={product.title}
                store={product.store}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default Products;
