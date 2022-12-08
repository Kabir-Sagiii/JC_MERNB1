import React from "react";
import "./Home.css";
import { Link, Outlet } from "react-router-dom";

function HomeProduct(props) {
  return (
    <div className="productContainer">
      <div className="categories">
        <Link to="electronic">Electronics</Link>
        <Link to="jewelery">Jewelery</Link>
        <Link to="/">MensWearing</Link>
        <Link to="/">WomensWearing</Link>
      </div>
      <div className="title">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default HomeProduct;
