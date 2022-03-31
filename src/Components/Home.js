import React from "react";
import Deck from "./Decks/Deck";
import { Link } from "react-router-dom";

function Home({ decks }) {
    const deckList = decks.map(deck => <Deck id={deck.id} key={deck.id} deck={deck} />);

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Link to={`/decks/new`} className="btn btn-secondary" ><i className="bi bi-plus-lg" style={{fontWeight: 900}}></i> Create Deck</Link>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {deckList}
                </div>
            </div>
        </div>
    )
}

export default Home;