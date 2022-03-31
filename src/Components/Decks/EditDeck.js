import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

export default function EditDeck(){
    // DECLARE STATE
    const INITIAL_FORM_STATE = {
        name: "",
        description: "",
        cards: []
    }

    const [deck, setDeck] = useState({...INITIAL_FORM_STATE});
    const [editing, setEditing] = useState(true);
    
    const {deckId} = useParams();
    const history = useHistory();

    // USEEFFECT FUNCTION TO RETRIEVE DECK INFO
    useEffect(()=>{
        const ac = new AbortController();
        async function fetchDeck(){
            try{
                const response = await readDeck(deckId);
                setDeck(response);
            }catch(err){
                if(err.name==="AbortError"){
                    console.log("Aborted", err);
                }else{
                    throw err;
                }
            }
        }

        fetchDeck();
        return () => ac.abort();
    }, []);

    // DECLARE HANDLER FUNCTIONS
    async function handleSubmit(e){
        e.preventDefault();
        const response = await updateDeck(deck);
        setEditing(false);
        history.goBack();
    }

    function handleChange(e){
        const {target} = e;
        setDeck({
            ...deck,
            [target.name]: target.value
        })
    }

    // RETURN DECKFORM COMPONENT
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link to={`/`} className="breadcrumb-item">Home</Link>
                    <Link to={`/decks/${deck.id}`} className="breadcrumb-item">{deck.name}</Link>
                    <Link to={`/decks/${deck.id}/edit`} className="breadcrumb-item active" aria-current="page">Edit Deck</Link>
                </ol>
            </nav>
            <h2>Edit Deck</h2>
            <DeckForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={deck}
                state={editing}
            />
        </div>
    )
}