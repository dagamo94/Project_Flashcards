import React from "react";

function Card({ card: { id, front, back }, handleDelete }) {
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
                        <button className="btn btn-secondary" type="button">Edit</button>
                        <button id={id} className="btn btn-danger" type="button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;