import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./VatIdCheck.css";

//Documentation: https://vatcheckapi.com/docs/#authentication-methods
//https://vatcheck.io/dashboard

export default function VatIdCheck() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [showResults, setShowResults] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setShowResults(true);
  }

  function handleBackClick() {
    setShowResults(false);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `gG0YjzxewnHQTKxW7d1XszMYkwUdT1SXkJ3D5cET`;
    let apiUrl = `https://vatcheck.io/api/validate?vat_number=${keyword}&api-key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value.toUpperCase());
  }

  return (
    <div className="VatIdCheck ">
      <div className="m-5">
        {!showResults && ( // render the form only if showResults is false
          <form class="row gy-2 gx-3 align-items-center" onSubmit={search}>
            <div class="col-6">
              <label for="colFormLabel" class="ol-sm-2 col-form-label">
                Check the validity of VAT number
              </label>
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="AB123456789 (Type VAT number including country code"
                    autoFocus={true}
                    onChange={handleKeywordChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-secondary w-100"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
        {showResults && ( // render the results only if showResults is true
          <div class="row mt-5 ">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <Results results={results} onBackClick={handleBackClick} />
                </div>
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
