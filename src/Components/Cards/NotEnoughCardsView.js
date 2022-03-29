import React from "react";

function NotEnoughCardsView({cards}){
    return (
        <div>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {cards.length} in this deck.</p>
        </div>
    );
}

export default NotEnoughCardsView;