// REUSABLE FORM COMPONENT FOR CREATE AND EDIT DECK COMPONENTS
import React from "react";
import { useHistory } from "react-router-dom";

export default function DeckForm({handleSubmit, formData, handleChange}) {
    const history = useHistory();
    
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
            <button className="btn btn-secondary" type="button" onClick={() => history.push('/')}>Cancel</button>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}