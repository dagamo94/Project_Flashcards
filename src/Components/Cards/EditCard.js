import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import { useParams, useHistory } from "react-router-dom";
import Breadcrumb from "../Common/Breadcrumb";
import CardForm from "./CardForm";

export default function EditCard() {
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

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
        console.log("Updated Card State: ", card);
        const response = await updateCard(card);
        console.log("Card Update Response: ", response);
        history.goBack();
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
            <Breadcrumb />
            edit card page
            <CardForm
                formData={card}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )
}