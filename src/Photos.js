import React from "react";
import "./dictionary.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row photo">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
                title={props.alt}
              >
                <img src={photo.src.landscape} className="img-fluid" />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
