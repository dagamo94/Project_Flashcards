import React, {useEffect, useState} from "react";
// import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";
import { useParams, useHistory, Link } from "react-router-dom";

export default function CreateDeck(){
    // DECLARE STATE
    const INITIAL_FORM_STATE = {
        name: "",
        description: ""
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

    const handleCancel = () => history.push("/");

    // RETURN DECKFORM COMPONENT
    return (
        <form name="deck" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Deck Name"
                    onChange={handleChange}
                    value={formData.name}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    placeholder="Brief description of the deck"
                    onChange={handleChange}
                    value={formData.description}
                    className="form-control"
                />
            </div>
            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )

}