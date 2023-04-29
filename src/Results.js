import React from "react";
import "./Results.css";
import VatNumber from "./VatNumber";
import VatAddress from "./VatAddress";
import VatName from "./VatName";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    var vatNumber = `${props.results.country_code}${props.results.vat_number}`;
    return (
      <div className="Results">
        <p>
          <VatNumber vatNumber={vatNumber} />
        </p>

        <p>
          <VatName vatName={props.results.registration_info.name} />
        </p>
        <p>
          <VatAddress vatAddress={props.results.registration_info.address} />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
