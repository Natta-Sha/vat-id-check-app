import React from "react";
import "./VatName.css";

export default function VatName(props) {
  if (props.vatName) {
    return (
      <div className="VatName">
        <strong>Name: </strong>
        {props.vatName}
      </div>
    );
  } else return <strong>"Name: ---"</strong>;
}
