import React from "react";
import "./App.css";
import VatIdCheck from "./VatIdCheck";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <VatIdCheck />
        <footer className="App-footer" class="fixed-bottom text-center">
          Coded by NB
        </footer>
      </div>
    </div>
  );
}
