import React from "react";
import CustomeNav from "../components/CustomeNav";
import FeaturesCategories from "../components/FeaturesCategories";
import Head from "../components/Header";
import Products from "../components/Products";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <Head />
      <CustomeNav />
      <Slider />
      <FeaturesCategories />
      <Products/>
    </div>
  );
};

export default Home;
