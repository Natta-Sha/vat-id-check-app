import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./VatIdCheck.css";

//Documentation: https://vatcheckapi.com/docs/#authentication-methods
//https://vatcheck.io/dashboard

export default function VatIdCheck() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
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
    <div className="VatIdCheck">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="AB123456789 (Type VAT number including country code"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
