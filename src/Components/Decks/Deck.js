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
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5>{name}</h5>
          </div>
          <div className="col d-flex justify-content-end text-muted">
            <p style={{fontSize: 12, fontWeight: 600}}>{cards.length} cards</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={`/decks/${id}`} className="btn btn-secondary" style={{marginRight: 10}}><i class="bi bi-eye-fill"></i> View</Link>
            <Link to={`/decks/${id}/study`} className="btn btn-primary"><i class="bi bi-journal-bookmark-fill"></i> Study</Link>
          </div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-danger" type="button" onClick={handleDelete}><i class="bi bi-trash-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deck;