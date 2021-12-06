import axios from "axios";
import React, { useState } from "react";
import "./dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [word, setWord] = useState();
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001ca133aef930447a7b74da40342b4cedc";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1> Dictionary </h1>
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
              className="btn btn-outline-light w-100"
            />
          </div>
        </div>
      </form>
      <br />
      <Results results={results} />
      <Photos photos={photos} alt={word} />
    </div>
  );
}
