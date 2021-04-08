import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../App";
const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    orderDate: new Date(),
  });
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
  const handleSubmit = () => {
    const newOrder = { ...loggedInUser, ...selectedDate, ...order };
    fetch("https://protected-lowlands-44213.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>Check Out</h1>
      You have: {order.length} Order
      {order.map((order) => (
        <div key={order._id}>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>
                  <h3>{order.name}</h3>
                </th>
                <th>Date</th>
                <th>Price</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{}</td>
                <td>{order.orderDate}</td>
                <td>{order.price}</td>
                <td>{order.email}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
      <Button onClick={handleSubmit} variant='success'>
        Check Out
      </Button>{" "}
    </div>
  );
};

export default CheckOut;
