import React from "react";
import "./VatName.css";

export default function VatName(props) {
  if (props.vatName) {
    return <div className="VatName">Name: {props.vatName}</div>;
  } else return "Name: ---";
}
