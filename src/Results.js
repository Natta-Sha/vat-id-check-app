import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <p>
          {" "}
          VAT number: {props.results.country_code}
          {props.results.vat_number}
        </p>
        <p>Name: {props.results.registration_info.name}</p>
        <p>Address: {props.results.registration_info.address}</p>
      </div>
    );
  } else {
    return null;
  }
}
