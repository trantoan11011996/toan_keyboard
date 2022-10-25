import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Detailpage() {

  const {id} = useParams()
  console.log("id",id);
  return (
    <div className="detail-page">
      Detail-page
    </div>
  );
}
