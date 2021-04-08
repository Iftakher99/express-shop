import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);
  // const togglerSpinner = (show) =>{
  //     const spinner = document.getElementById('loading-spinner');
  //    if(show){
  //     spinner.classList.remove('d-none');
  //    }
  //    else{
  //     spinner.classList.add('d-none');
  //    }
  //   }

  return (
    <div className='row'>
      {/* <div class="d-flex justify-content-center ">
                <div id="loading-spinner" class="spinner-border text-success  d-none" role="status">
                    <span class="visually-hidden"></span>
                </div>
                togglerSpinner(false)
            </div> */}
      {products.map((product) => (
        <Products key={product._id} products={product}></Products>
      ))}
    </div>
  );
};

export default Home;
