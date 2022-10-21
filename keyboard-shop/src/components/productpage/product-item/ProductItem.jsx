import React from "react";
import {Link} from "react-router-dom"
export default function ProductItem({product}){

    return(
        <div className="product-item">
           <div className="product-image">
                <img src={product.imageMain}></img>
           </div>
           <div className="product-content">
                <h1>{product.name}</h1>
                <p>${product.price}.00 USD</p>
           </div>
        </div>
    )
}