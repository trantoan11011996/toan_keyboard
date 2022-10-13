import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Detailpage() {
  return (
    <div className="detail-page">
      <Link to={"/order-page"}>
        <Button>Order</Button>
      </Link>
      Detail-page
    </div>
  );
}
