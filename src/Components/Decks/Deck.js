import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function Deck({ deck }) {
  const { id, name, description, cards } = deck;
  const history = useHistory();

  async function handleDelete(e) {
    e.preventDefault();

    if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
      await deleteDeck(id);
      history.go(0);
    }

  }

  return (
    <div className="card card-w-100">
      <div className="container card-body">
        <div className="row">
          <div className="col">
            <h5 className="card-title">{name}</h5>
          </div>
          <div className="col d-flex justify-content-end text-muted">
            <p>{cards.length} cards</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="card-text">{description}</p>
            <Link to={`/decks/${id}`} className="btn btn-secondary">View</Link>
            <Link to={`/decks/${id}/study`} className="btn btn-primary">Study</Link>
            <button className="btn btn-danger" type="button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deck;