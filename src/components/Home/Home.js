import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://protected-lowlands-44213.herokuapp.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return (
    <div className='row'>
      {products.length === 0 && (
        <div class='spinner' style={{ fontSize: "18px" }}>
          <div class='head'></div>
        </div>
      )}
      {products.map((product) => (
        <Products key={product._id} products={product}></Products>
      ))}
    </div>
  );
};

export default Home;
