import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <p>{props.meaning.partOfSpeech}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <strong>Definition:</strong> {definition.definition} <br />
            <em>ie: {definition.example}</em> <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
