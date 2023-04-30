import React from "react";
import "./Results.css";
import VatNumber from "./VatNumber";
import VatAddress from "./VatAddress";
import VatName from "./VatName";

export default function Results(props) {
  if (props.results) {
    if (props.results.checksum_valid) {
      var vatNumber = `${props.results.country_code}${props.results.vat_number}`;
      return (
        <div className="Results">
          <div>
            <VatNumber vatNumber={vatNumber} />
          </div>

          <div>
            <VatName vatName={props.results.registration_info.name} />
          </div>
          <div>
            <VatAddress vatAddress={props.results.registration_info.address} />
          </div>
        </div>
      );
    } else {
      return <div>Invalid VAT number</div>;
    }
  } else {
    return null;
  }
}
