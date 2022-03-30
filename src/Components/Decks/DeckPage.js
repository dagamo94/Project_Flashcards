import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api/index.js";
import { deleteCard } from "../../utils/api/index.js";
import Breadcrumb from "../Common/Breadcrumb.js";
import Card from "../Cards/Card";
import DeckPageHeader from "./DeckPageHeader.js";


function DeckPage() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const { deckId } = useParams();
    const history = useHistory();

    {/* map through cardsList and display them one by one - use another component to display them? */ }
    const cardsList = cards.map(card => <Card id={card.id} key={card.id} card={card} handleDelete={handleDelete}/>)

    async function handleDelete(e){
        e.preventDefault();
        const cardId = e.target.id;
        if(window.confirm("Delete Card?\n\nYou will not be able to recover it.")){
            await deleteCard(cardId);
            history.go(0);
        }
    }
    useEffect(() => {
        const ac = new AbortController();
        async function fetchDeck() {
            try {
                const response = await readDeck(deckId, ac.signal);
                setCards(response.cards);
                setDeck(response);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Aborted:", err);
                }
            }
        }

        fetchDeck();

        console.log("Cards", cards);
        return () => ac.abort();
    }, []);

    console.log("Params: ", useParams());
    return (
        <div className="container">
            <Breadcrumb />
            Deck ID: {deckId}

            {deck ? <DeckPageHeader deck={deck} /> : <p>Loading...</p>}

            <div className="row">
                <div className="col">
                    <h2>Cards</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {cards.length ? cardsList : <p>No cards to display. Click 'Add Card' to create a new Card.</p>}
                </div>
            </div>
        </div>
    )
}

export default DeckPage;