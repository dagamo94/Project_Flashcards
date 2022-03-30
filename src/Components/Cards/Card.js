import React from "react";
import { Link, useParams } from "react-router-dom";

function Card({ card: { id, front, back }, handleDelete }) {
    const {deckId} = useParams();
    return (
        <div className="card" id={id}>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <p className="card-text">{front}</p>
                    </div>
                    <div className="col">
                        <p className="card-text">{back}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end" id={id}>
                        <Link to={`/decks/${deckId}/cards/${id}/edit`} className="btn btn-secondary" type="button">Edit</Link>
                        <button id={id} className="btn btn-danger" type="button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;