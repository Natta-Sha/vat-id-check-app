import React from "react";
import "./Results.css";
import VatNumber from "./VatNumber";
import VatAddress from "./VatAddress";
import VatName from "./VatName";

export default function Results(props) {
  function handleBackClick() {
    props.onBackClick();
  }
  if (props.results) {
    if (props.results.valid) {
      return (
        <div className="Results">
          <div className="row">
            <div className="col-9">
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

            <div className="col-3">
              <button
                className="btn btn-secondary w-10"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <div className="col-9">
              <strong>Invalid VAT number</strong>
            </div>{" "}
            <div className="col-3">
              <button
                className="btn btn-secondary w-10"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
}
