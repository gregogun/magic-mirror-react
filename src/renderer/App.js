import React, { useState } from "react";
import { useFetch } from "./utils/hooks";
require("../index.css");

const App = () => {
  const { getEvents, events, getVerse, verse, isLoading } = useFetch();
  const [isClicked, setIsClicked] = useState(false);

  const handleEventsClick = () => {
    setIsClicked(true);
    getEvents();
  };

  const handleVerseClick = () => {
    setIsClicked(true);
    getVerse();
  };

  return (
    <div>
      <div>
        {isClicked ? <h1>Today's events:</h1> : <h1>Get today's events!!</h1>}
        {!isClicked && <button onClick={handleEventsClick}>Get events!</button>}
        {isClicked && (
          <div>
            {!events && !isLoading && <p>No events today...</p>}
            {!events && isLoading && <p>Loading...</p>}
            <ul>
              {events &&
                !isLoading &&
                events.map((event) => <li key={event.id}>{event.summary}</li>)}
            </ul>
          </div>
        )}
      </div>
      <div>
        {isClicked ? <h1>Today's verse:</h1> : <h1>Get your daily verse</h1>}
        {!isClicked && <button onClick={handleVerseClick}>Get verse!</button>}
        {isClicked && (
          <div>
            {!verse && !isLoading && (
              <p>There was a problem getting your verse. Check back soon!</p>
            )}
            {!verse && isLoading && <p>Loading....</p>}
            {verse && !isLoading && (
              <div>
                <p>{verse.text}</p>
                <p>{verse.reference}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
