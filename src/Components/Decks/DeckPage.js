import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {readDeck} from "../../utils/api/index.js";


function DeckPage() {
    const [cards, setCards] = useState([]);
    const { decksId } = useParams();

    useEffect(() => {
        const ac = new AbortController();
        async function fetchDeck() {
            try {
                const response = await readDeck(decksId,ac.signal);
                setCards(response);
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
        <div>
            askjdhad
            {decksId}
        </div>
    )
}

export default DeckPage;