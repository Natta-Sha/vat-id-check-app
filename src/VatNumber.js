import React from "react";
import "./VatNumber.css";

export default function VatNumber(props) {
  return (
    <div className="VatNumber">
      <strong>VAT number: </strong>
      {props.vatNumber}
    </div>
  );
}
