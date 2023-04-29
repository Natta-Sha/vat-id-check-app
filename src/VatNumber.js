import React from "react";
import "./VatNumber.css";

export default function VatNumber(props) {
  return <div className="VatNumber">VAT number: {props.vatNumber}</div>;
}
