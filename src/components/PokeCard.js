import React from "react";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <Link to={`${props.name}`}>See more</Link>
      </div>
    </div>
  );
};
export default PokeCard;
