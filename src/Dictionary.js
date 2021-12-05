import axios from "axios";
import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState();
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function handleResponse(response) {
    console.log(response);
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
              placeholder="Type a city.."
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
      <div className="Word">
        <h2>
          Code <span className="soundsLike">/kōd/ </span>
        </h2>
        <hr />
        <h7>noun</h7>
        <br />
        <br />
        <p className="firstDef">
          1. a system of words, letters, figures, or other symbols substituted
          for other words, letters, etc., especially for the purposes of
          secrecy. "the Americans cracked their diplomatic code"
        </p>
        <p className="secondDef">
          2. COMPUTING program instructions. "assembly code"
        </p>
        <p className="thridDef">
          3. a systematic collection of laws or regulations. "the criminal code"{" "}
        </p>
      </div>
    </div>
  );
}
