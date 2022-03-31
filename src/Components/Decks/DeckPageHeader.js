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
                <div className="col">
                    <Link to={`/decks/${deckId}/edit`} type="button" className="btn btn-secondary mr-2"><i className="bi bi-pencil-fill"></i> Edit</Link>
                    <Link to={`/decks/${deck.id}/study`} type="button" className="btn btn-primary mr-2"><i className="bi bi-journal-bookmark-fill"></i> Study</Link>
                    <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary"><i className="bi bi-plus-lg" style={{fontWeight: 900}}></i> Add Cards</Link>
                </div>
                <div className="col d-flex justify-content-end">
                    <button type="button" className="btn btn-danger" onClick={handleDeckDelete}><i className="bi bi-trash-fill"></i></button>
                </div>
            </div>
        </div>
    );
}