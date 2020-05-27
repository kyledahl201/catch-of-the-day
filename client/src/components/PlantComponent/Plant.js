import React from "react";
import "./Plant.css";

function Plant(props) {
  return (
    <div className="plant">
      <div className="content">
          <p>
            <strong>Name:</strong> {props.name}
          </p>
          <p>
            <strong>Link:</strong> {props.link}
            <div className="img-container">
          For gif image later
            </div>
          </p>
      </div>
    </div>
  );
}

export default Plant;