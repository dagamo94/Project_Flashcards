import React, {useEffect, useState} from "react";
import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";
import { useParams, useHistory, Link } from "react-router-dom";

export default function CreateDeck(){
    // DECLARE STATE
    const INITIAL_FORM_STATE = {
        name: "",
        description: "",
        cards: []
    }

    //const [data, setData] = useState({INITIAL_FORM_STATE});
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({...INITIAL_FORM_STATE});

    const handleChange = event => {
        const {target} = event;
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    const history = useHistory();


    // DECLARE HANDLER FUNCTIONS
    async function handleSubmit (e) {
        e.preventDefault();
        const response = await createDeck(formData);
        //const data = await response.json();
        console.log("Deck Created: ", response);
        history.push(`/decks/${response.id}`)
    };

    //const handleCancel = () => history.push("/");

    // RETURN DECKFORM COMPONENT
    return (
        <div>
            <h2>Create Deck</h2>
            <DeckForm 
                formData={formData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </div>
    )

}