import { useState, useEffect } from "react";
import axios from "axios";
import settings from "electron-settings";

const useFetch = () => {
  const [events, setEvents] = useState();
  const [weather, setWeather] = useState();
  const [storedDay, setStoredDay] = useState();
  const [verseText, setVerseText] = useState();
  const [verseRef, setVerseRef] = useState();
  const [currentDay, setCurrentDay] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const day = new Date().getDay();

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

  const fetchVerse = () => {
    const getVerse = () => {
      return axios.get("http://localhost:8888/verse").then(
        (res) => {
          return res.data.verse.details;
        },
        (err) => {
          setIsLoading(false);
          console.log(err);
        }
      );
    };

    getVerse().then((value) => {
      settings
        .set("verse", {
          text: value.text,
          reference: value.reference,
          day: day,
        })
        .then(() => {
          settings.get("verse.text").then((value) => {
            console.log(value);
            setVerseText(value);
          });
          settings.get("verse.reference").then((value) => {
            console.log(value);
            setVerseRef(value);
          });
          settings.get("verse.day").then((value) => {
            console.log(value);
            setCurrentDay(value);
            setIsLoading(false);
          });
        });
    });
  };

  const checkVerse = () => {
    settings.has("verse.day").then((bool) => {
      if (bool === true) {
        console.log("the data exists!");
        settings.has("verse.day").then((bool) => {
          if (bool === true) {
            settings.get("verse.day").then((value) => {
              if (value !== day) {
                fetchVerse();
              } else {
                settings.get("verse.text").then((value) => {
                  console.log(value);
                  setVerseText(value);
                });
                settings.get("verse.reference").then((value) => {
                  console.log(value);
                  setVerseRef(value);
                });
                settings.get("verse.day").then((value) => {
                  console.log(value);
                  setCurrentDay(value);
                  setIsLoading(false);
                });
              }
            });
          }
        });
      } else {
        console.log("data does not yet exists");
        fetchVerse();
      }
    });
  };

  return {
    getEvents,
    events,
    checkVerse,
    verseText,
    verseRef,
    currentDay,
    getWeather,
    weather,
    storedDay,
    setStoredDay,
    isLoading,
  };
};

export default useFetch;
