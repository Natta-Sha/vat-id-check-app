import React, { useState } from "react";
import axios from "axios";
import "./VatIdCheck.css";

//Documentation: https://vatcheckapi.com/docs/#authentication-methods

export default function VatIdCheck() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.registration_info.address);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}`);

    let apiKey = `eg9uTHp9geZ0NlaT7CXL0jpPeBSNYXsvMQP0eLGa`;
    let apiUrl = `https://api.vatcheckapi.com/v2/check?vat_number=EE101992839&apikey=${apiKey}`;

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
    </div>
  );
}
