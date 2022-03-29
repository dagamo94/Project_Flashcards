import React from "react";
import {Link} from "react-router-dom";

function Deck({ deck }) {
  const { id, name, description, cards } = deck;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/decks/${id}`} className="btn btn-secondary">View</Link>
        <Link to={`/decks/${id}/study`} className="btn btn-primary">Study</Link>
        <Link to="#" className="btn btn-danger">Delete</Link>
      </div>
    </div>
  );
}

export default Deck;