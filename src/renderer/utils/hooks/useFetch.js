import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [events, setEvents] = useState();
  const [eventLoading, setEventLoading] = useState();
  const [verse, setVerse] = useState();
  const [verseLoading, setVerseLoading] = useState();

  const getEvents = () => {
    setEventLoading(true);
    axios.get("http://localhost:8888/calendar").then(
      (res) => {
        setEvents(res.data);
        setEventLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const getVerse = () => {
    setVerseLoading(true);
    axios.get("http://localhost:8888/verse").then(
      (res) => {
        setVerse(res.data.verse.details);
        setVerseLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return {
    getEvents,
    events,
    getVerse,
    verse,
    eventLoading,
    verseLoading,
  };
};

export default useFetch;
