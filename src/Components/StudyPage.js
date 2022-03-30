import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api/index.js";
import { useParams, useHistory } from "react-router-dom";
import CardStudyView from "./Cards/CardStudyView.js";
import NotEnoughCardsView from "./Cards/NotEnoughCardsView.js";
import Breadcrumb from "./Common/Breadcrumb.js";


function StudyPage() {
    const [cards, setCards] = useState([]);
    const [currCard, setCurrCard] = useState(0);
    const [deckTitle, setDeckTitle] = useState("");
    const [flipped, setFlipped] = useState(false);
    const { deckId } = useParams();

    const history = useHistory();

    const handleFlip = (event) => {
        event.preventDefault();
        setFlipped((show) => !show);
    }

    const handleNext = event => {
        event.preventDefault();
        if (currCard === cards.length - 1) {
            if (window.confirm("Restart Cards?\n\nClick 'cancel' to return to the home page.")) {
                setCurrCard(curr => curr = 0);
                setFlipped(flip => !flip);
            } else {
                history.push("/");
            }
        } else {
            setCurrCard(curr => curr + 1);
            setFlipped(show => !show);
        }
    }

    useEffect(() => {
        const ac = new AbortController();
        async function fetchDeck() {
            try {
                const response = await readDeck(deckId, ac.signal);
                setCards(response.cards);
                setDeckTitle(response.name);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Aborted:", err);
                }
            }
        }

        fetchDeck();

        console.log("Cards", cards, cards.length);
        return () => ac.abort();
    }, []);

    function displayCards() {
        if (cards.length > 2) {
            return (
                <div>
                    <CardStudyView
                        cards={cards}
                        currCard={currCard}
                        handleFlip={handleFlip}
                        handleNext={handleNext}
                        flipped={flipped}
                    />
                </div>
            );
        } else {
            return <NotEnoughCardsView cards={cards} />;
        }
    }

    return (
        <div>
            <Breadcrumb/>
            <h1>Study: {deckTitle}</h1>
            {displayCards()}
        </div>
    )
}

export default StudyPage;