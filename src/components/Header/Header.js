import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <Link className='shop-name' to='/home'>
        {" "}
        Express Shop
      </Link>

      <nav className='nav'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/order'>Order</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li>
            <Link to='/deals'>Deals</Link>
          </li>
          <li className='active'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
