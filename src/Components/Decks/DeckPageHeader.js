import React from "react";
import { Link } from "react-router-dom";

export default function DeckPageHeader({ deck }) {
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
                    <Link to={``} type="button" className="btn btn-secondary">Edit</Link>
                    <Link to={``} type="button" className="btn btn-primary">Study</Link>
                    <Link to={``} type="button" className="btn btn-primary">Add Cards</Link>
                </div>
                <div className="col">
                    <Link to={``} type="button" className="btn btn-danger">Delete</Link>
                </div>
            </div>
        </div>
    );
}