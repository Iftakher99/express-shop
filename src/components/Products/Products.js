import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Products.css";
const Products = ({ products }) => {
  const history = useHistory();
  const handleBuy = (productType) => {
    history.push(`/checkOut/${productType}`);
  };
  const deleteProduct = (id) => {};
  return (
    // <div className='col-md-3'>
    //   <img style={{ height: "300px" }} src={products.imageUrl} alt='' />
    //   <h3>
    //     {products.name}{" "}
    //     <button onClick={() => deleteProduct(products._id)}>Delete</button>
    //   </h3>
    <div className='col-md-3 '>
      <div className=' card-div'>
        <Card className='card'>
          <Card.Img
            className='card-img'
            variant='top'
            src={products.imageUrl}
            alt=''
          />
          <Card.Body>
            <Card.Title>
              <h3>{products.name} </h3>
            </Card.Title>
            <Card.Text className='card-text'>
              {" "}
              ${products.price} &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => handleBuy(products.productType)}
                variant='success'
              >
                Buy Now
              </Button>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    // </div>
  );
};

export default Products;
