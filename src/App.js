import React, { useState, useEffect } from "react";
import ImageSearch from "./components/ImageSearch";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />
      <WeatherCard />
    </>
  );
}

export default App;
