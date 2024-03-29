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
    axios.get("https://go-magic-mirror.herokuapp.com/calendar").then(
      (res) => {
        if (res.data.length !== 0) {
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
    axios.get("https://go-magic-mirror.herokuapp.com/weather").then(
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
      return axios.get("https://go-magic-mirror.herokuapp.com/verse").then(
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
            setVerseText(value);
          });
          settings.get("verse.reference").then((value) => {
            setVerseRef(value);
          });
          settings.get("verse.day").then((value) => {
            setCurrentDay(value);
            setIsLoading(false);
          });
        });
    });
  };

  const checkVerse = () => {
    settings.has("verse.day").then((bool) => {
      if (bool === true) {
        settings.has("verse.day").then((bool) => {
          if (bool === true) {
            settings.get("verse.day").then((value) => {
              if (value !== day) {
                fetchVerse();
              } else {
                settings.get("verse.text").then((value) => {
                  setVerseText(value);
                });
                settings.get("verse.reference").then((value) => {
                  setVerseRef(value);
                });
                settings.get("verse.day").then((value) => {
                  setCurrentDay(value);
                  setIsLoading(false);
                });
              }
            });
          }
        });
      } else {
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
