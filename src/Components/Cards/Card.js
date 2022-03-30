import React from "react";
import { Link } from "react-router-dom";

function Card({ card: { id, front, back, deckId } }) {
    return (
        <div className="card">
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
                    <div className="col d-flex justify-content-end">
                        <Link to={'/'} className="btn btn-secondary" type="button">Edit</Link>
                        <Link to={'/'} className="btn btn-danger" type="button">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;