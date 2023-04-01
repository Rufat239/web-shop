import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <ProductProvider>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
