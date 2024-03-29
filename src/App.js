import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AddProducts from "./components/AddProducts/AddProducts";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/order'>
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path='/checkOut/:productType'>
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <AddProducts />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
