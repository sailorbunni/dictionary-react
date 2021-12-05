import axios from "axios";
import React, { useState } from "react";
import "./dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState();
  const [results, setResults] = useState(null);
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1> Dictionary </h1>
      <br />
      <h4>What would you like to look up?</h4>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a word.."
              className="form-control"
              autoComplete="off"
              onChange={updateWord}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <br />
      <Results results={results} />
    </div>
  );
}
