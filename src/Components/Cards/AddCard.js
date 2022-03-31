import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api";
import CardForm from "./CardForm";

export default function AddCard() {

    const INITIAL_FORM_STATE = {
        front: "",
        back: ""
    }

    const [deck, setDeck] = useState({})
    const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE });

    const history = useHistory();
    const { deckId } = useParams();

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

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await createCard(deckId, formData);
        setFormData({ ...INITIAL_FORM_STATE });

    }

    const handleChange = event => {
        const { target } = event;
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link to={`/`} className="breadcrumb-item">Home</Link>
                    <Link to={`/decks/${deck.id}`} className="breadcrumb-item">{deck.name}</Link>
                    <Link to={``} className="breadcrumb-item active" aria-current="page">Add Card</Link>
                </ol>
            </nav>
            <h3>{deck.name}: Add Card</h3>
            <CardForm
                formData={formData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}