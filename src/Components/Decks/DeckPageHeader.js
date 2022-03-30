import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DeckPageHeader({ deck, handleDeckDelete }) {
    const {url, deckId, path} = useParams();
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h3>{deck.name}</h3>
                    <p>{deck.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <Link to={`/decks/${deckId}/edit`} type="button" className="btn btn-secondary">Edit</Link>
                    <Link to={`/decks/${deck.id}/study`} type="button" className="btn btn-primary">Study</Link>
                    <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary">Add Card</Link>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger" onClick={handleDeckDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}