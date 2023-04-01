import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d453ab3a-aec9-48de-9d6c-6e186cabbe9d")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
