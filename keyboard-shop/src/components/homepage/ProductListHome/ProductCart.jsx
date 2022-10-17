import React from "react";


export default function ProductCart({product}){
    
    return(
        <div className="product-cart-home">
            <div className="product-cart-image">
                <img className="cart-image" src={product.imageMain}></img>
            </div>
            <div className="product-cart-content">
                <p className="product-cart-name">{product.name}</p>
                <p className="product-cart-price">${product.price}.00</p>
            </div>
        </div>
    )
}