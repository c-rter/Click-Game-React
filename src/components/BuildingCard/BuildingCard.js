import React from "react";
import "./BuildingCard.css";

const BuildingCard = props => (
  <span onClick={() => props.shuffleBuildings(props.id)}>
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
  </span>

);

export default BuildingCard;
