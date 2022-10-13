import React from "react";
import {Link} from "react-router-dom"
export default function ProductItem(){

    return(
        <div className="product-item">
            <Link to={"/detail-page"}>
                <h1>Product-item</h1>
            </Link>
        </div>
    )
}