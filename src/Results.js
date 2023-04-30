import React from "react";
import "./Results.css";
import VatNumber from "./VatNumber";
import VatAddress from "./VatAddress";
import VatName from "./VatName";

export default function Results(props) {
  if (props.results) {
    if (props.results.valid) {
      return (
        <div className="Results">
          <div>
            <VatNumber vatNumber={props.results.full_vat_number} />
          </div>

          <div>
            <VatName vatName={props.results.company_name} />
          </div>
          <div>
            <VatAddress vatAddress={props.results.company_address} />
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
