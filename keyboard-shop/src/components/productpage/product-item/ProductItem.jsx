import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function ProductItem({ product, id }) {
  return (
    <div className="product-item">
      <Link to={"/product/" + id}>
        <div className="product-image">
          <img src={product.imageMain}></img>
        </div>
        <div className="product-content">
          <h1>{product.name}</h1>
          <p>${product.price}.00 USD</p>
        </div>
      </Link>
    </div>
  );
}
