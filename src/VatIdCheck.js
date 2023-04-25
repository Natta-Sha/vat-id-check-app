import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./VatIdCheck.css";

//Documentation: https://vatcheckapi.com/docs/#authentication-methods

export default function VatIdCheck() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `eg9uTHp9geZ0NlaT7CXL0jpPeBSNYXsvMQP0eLGa`;
    let apiUrl = `https://api.vatcheckapi.com/v2/check?vat_number=${keyword}&apikey=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
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
