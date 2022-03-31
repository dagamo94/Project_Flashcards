import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api/index.js";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import DeckPage from "../Components/Decks/DeckPage";
import StudyPage from "../Components/StudyPage";
import CreateDeck from "../Components/Decks/CreateDeck";
import AddCard from "../Components/Cards/AddCard";
import EditCard from  "../Components/Cards/EditCard";
import EditDeck from "../Components/Decks/EditDeck";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    async function fetchDecks() {
      try {
        const response = await listDecks(ac.signal);
        setDecks(response);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted:", err);
        }
      }
    }

    fetchDecks();
    return () => ac.abort();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId">
            <DeckPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
