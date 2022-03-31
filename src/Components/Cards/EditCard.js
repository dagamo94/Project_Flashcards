import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import { useParams, useHistory, Link } from "react-router-dom";
import CardForm from "./CardForm";

export default function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const [editing, setEditing] = useState(true);

    const { deckId, cardId } = useParams();
    const history = useHistory();

    useEffect(() => {
        const ac = new AbortController();
        async function fetchDeck() {
            try {
                const response = await readDeck(deckId, ac.signal);
                setDeck(response);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Aborted", err);
                } else {
                    throw err;
                }
            }
        }

        fetchDeck();
        return () => ac.abort();
    }, []);

    useEffect(() => {
        const ac = new AbortController();
        async function fetchCard() {
            try {
                const response = await readCard(cardId);
                setCard(response);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Aborted", err);
                } else {
                    throw err;
                }
            }
        }

        fetchCard();
        return () => ac.abort();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await updateCard(card);
        history.goBack();
        setEditing(false);
    }

    function handleChange(event) {
        const { target } = event;
        setCard({
            ...card,
            [target.name]: target.value
        });
    };


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link to={`/`} className="breadcrumb-item">Home</Link>
                    <Link to={`/decks/${deck.id}`} className="breadcrumb-item">{deck.name}</Link>
                    <Link to={`/decks/${deck.id}/cards/${card.id}/edit`} className="breadcrumb-item active" aria-current="page">Edit Card</Link>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <CardForm
                formData={card}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                state={editing}
            />
        </div>
    )
}