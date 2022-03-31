// REUSABLE FORM COMPONENT FOR ADDCARD AND EDITCARD COMPONENTS
import React from "react";
import { useHistory } from "react-router-dom";

export default function CardForm({ handleSubmit, handleChange, formData, state }) {
    const history = useHistory();

    return (
        <form name="card" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea
                    id="front"
                    name="front"
                    required
                    placeholder="Front side of the card"
                    onChange={handleChange}
                    value={formData.front}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea
                    id="back"
                    name="back"
                    required
                    placeholder="Back side of the card"
                    onChange={handleChange}
                    value={formData.back}
                    className="form-control"
                />
            </div>
            {state ?
                (<div><button className="btn btn-secondary mr-2" type="button" onClick={() => history.goBack()}>Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit</button> </div>)
                :
                (<div><button className="btn btn-secondary mr-2" type="button" onClick={() => history.goBack()}>Done</button>
                    <button className="btn btn-primary" type="submit">Save</button> </div>)
            }
        </form>
    )
}