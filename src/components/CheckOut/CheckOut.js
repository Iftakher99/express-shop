import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../App";
const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(
      "https://protected-lowlands-44213.herokuapp.com/products?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <h1>Check Out</h1>
      {order.map((order) => (
        <li key={order._id}></li>
      ))}
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>
              <h3>You have: {order.length} Order</h3>
            </th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
      <Button variant='success'>Check Out</Button>{" "}
    </div>
  );
};

export default CheckOut;
