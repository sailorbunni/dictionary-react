import React from "react";
import "./dictionary.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Word">
        <h2>
          {props.results.word}{" "}
          <span className="soundsLike">/{props.results.phonetic}/ </span>
        </h2>
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
