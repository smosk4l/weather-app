import React, { useState, useEffect } from "react";
import ImageSearch from "./components/ImageSearch";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("Warszawa");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) {
          setData(res);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);
  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? "" : <WeatherCard weatherData={data} />}
    </>
  );
}

export default App;
