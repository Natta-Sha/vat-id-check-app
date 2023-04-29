import React from "react";
import "./VatAddress.css";

export default function VatAddress(props) {
  if (props.vatAddress) {
    return <div className="VatAddress">Address: {props.vatAddress}</div>;
  } else return "Address: ---";
}
