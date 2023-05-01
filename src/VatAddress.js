import React from "react";
import "./VatAddress.css";

export default function VatAddress(props) {
  if (props.vatAddress) {
    return (
      <div className="VatAddress">
        <strong>Address: </strong>
        {props.vatAddress}
      </div>
    );
  } else return <strong>Address: ---</strong>;
}
