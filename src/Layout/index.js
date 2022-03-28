import React, {useEffect, useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {listDecks} from "../utils/api/index.js";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import DeckPage from "../Components/Decks/DeckPage";

function Layout() {
  const [decks, setDecks] = useState([]);
  
  
  useEffect(() => {
    const ac = new AbortController();
    async function fetchDecks(){
      try{
        const response = await listDecks(ac.signal);
        setDecks(response);
      }catch(err){
        if(err.name === "AbortError"){
          console.log("Aborted:", err);
        }
      }
    }

    fetchDecks();

    console.log("Decks", decks);
    return () => ac.abort();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>
          <Route exact path="/">
            <Home decks={decks}/>
          </Route>

          <Route path="/decks/:deckId">
            <DeckPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
