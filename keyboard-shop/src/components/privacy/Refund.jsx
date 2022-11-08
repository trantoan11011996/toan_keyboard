import React from "react";
import { Container } from "react-bootstrap";
import "../privacy/privacy.css"
export default function Refund() {
  return (
    <div className="refund">
      <Container className="container-refund">
        <h1>Refund Polilcy</h1>
        <div className="policy-content">
         <p className="content"> All products are new and are sold “as-is”. You are responsible for
          your purchase and we will not issue refunds for irresponsible
          purchases.</p>
        </div>
      </Container>
    </div>
  );
}
