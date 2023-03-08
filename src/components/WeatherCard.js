import React from "react";

const WeatherCard = ({ weatherData }) => {
  const { weather, main } = weatherData;
  const iconURL = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  function makeFirstLettersBig(word) {
    return word
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  const date = new Date();
  return (
    <div className="h-screen w-screen mt-24 mx-auto">
      <div className=" mx-auto bg-teal-500  max-w-[500px] text-white px-8 py-6  rounded-xl shadow-xl grid grid-cols-3">
        <div className="flex flex-col items-start gap-2 col-start-1 col-end-3">
          <h1 className="text-4xl font-normal">{weatherData.name}</h1>
          <div className="text-lg flex gap-1 mb-12">
            <span>
              {date.getHours()}:
              {date.getMinutes() < 9
                ? `0${date.getMinutes()}`
                : date.getMinutes()}
            </span>
            <span>&bull;</span>
            <span>
              {date.getDate() < 9 ? `0${date.getDate()}` : date.getDate()}/
              {date.getMonth() < 9
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1}
            </span>
          </div>
          <span className="text-5xl">{Math.round(main.temp)}&#8451;</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={iconURL} alt="Weather Icon from openweathermap" />
          <div className="text-lg">
            {makeFirstLettersBig(weather[0].description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
