import React from "react";
import {
  Router,
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import AppScreen from "./app";
import HomeScreen from "./home";

const Screens = () => {
  const source = createMemorySource("/");
  const history = createHistory(source);

  return (
    <LocationProvider history={history}>
      <Router>
        <HomeScreen default path="/" />
        <AppScreen path="/app" />
      </Router>
    </LocationProvider>
  );
};

export default Screens;
