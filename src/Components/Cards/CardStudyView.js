import React from "react";
import { Link } from "react-router-dom";

function CardStudyView({ cards, currCard, handleFlip, handleNext, flipped }) {
    const card = cards[currCard];

    return (
        <div className="card">
            <div className="card-body">
                <h3>Card {currCard + 1} of {cards.length}</h3>
                
                <p>{!flipped ? card.front : card.back}</p>

                <Link className="btn btn-secondary mr-2" to={``} onClick={handleFlip}>Flip</Link>

                {!flipped ? (<span></span>) : (
                    <Link className="btn btn-primary" to={``} onClick={handleNext}>Next</Link>
                )}
            </div>
        </div>
    );
}

export default CardStudyView;