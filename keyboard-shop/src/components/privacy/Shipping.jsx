import React from "react";
import { Container } from "react-bootstrap";
import "../privacy/privacy.css";

export default function Shipping() {
  return (
    <div className="shipping">
      <Container className="container-shipping">
        <h1>Shipping Policy</h1>
        <div className="content-shipping">
          <p>
            Once a package has entered the possession of the postal service/
            company, we cannot be held responsible for any damaged goods
            delivered by the postal service/ company. We are also not
            responsible for the failure of delivery of items due to factors
            outside of our control.
          </p>
          <p>
            If any address presents an error in our system, we will not ship to
            that address and will reach out for a new address or a correct of
            said address. Your options will be to ship to a new address or have
            your order refunded.
          </p>
          <p>
            All international order will be shipped with VietnamPost (deliver in
            2 to 3 weeks) or express package of EMS and DHL (deliver in 3 to 5
            working days). We are not able to verify international addresses, so
            we will ship to the address included with the order. Therefore we
            are not responsible the products fail to deliver due to an incorrect
            address.
          </p>
        </div>
      </Container>
    </div>
  );
}
