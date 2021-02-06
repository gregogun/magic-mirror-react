import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [events, setEvents] = useState();
  const [verse, setVerse] = useState();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getEvents = () => {
    axios.get("http://localhost:8888/calendar").then(
      (res) => {
        if (res.data.length !== 0) {
          console.log(res.data);
          setEvents(res.data);
        } else {
          setEvents(null);
        }
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
        console.log(err);
      }
    );
  };

  const getVerse = () => {
    axios.get("http://localhost:8888/verse").then(
      (res) => {
        setVerse(res.data.verse.details);
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
        console.log(err);
      }
    );
  };

  const getWeather = () => {
    axios.get("http://localhost:8888/weather").then(
      (res) => {
        console.log(res.data);
        setWeather(res.data);
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
    getWeather,
    weather,
    isLoading,
  };
};

export default useFetch;
