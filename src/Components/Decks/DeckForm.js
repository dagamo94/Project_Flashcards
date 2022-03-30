// REUSABLE FORM COMPONENT FOR CREATE AND EDIT DECK COMPONENTS
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function DeckForm({handleSubmit, handleCancel, initialState}) {
    

    const [formData, setFormData] = useState({initialState});

    const handleChange = event => {
        const {target} = event;
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    return (
        <form name="deck" onSubmit={() => handleSubmit(formData)}>
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
            <Link to={`/`} className="btn btn-secondary" onClick={handleCancel}>cancel</Link>
            <Link to={``} className="btn btn-primary" type="submit">Submit</Link>
        </form>
    )
}