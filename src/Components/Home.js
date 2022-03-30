import React from "react";
import Deck from "./Decks/Deck";
import { Link } from "react-router-dom";

function Home({ decks }) {
    const deckList = (<ul>{decks.map(deck => <Deck key={deck.id} deck={deck} />)}</ul>)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={`/decks/new`} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>Create Deck</Link>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    {deckList}
                </div>
            </div>
        </div>
    )
}

export default Home;