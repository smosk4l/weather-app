import React from "react";
import Icons from "./weatherIcons/icons";

const WeatherCard = ({ weatherData }) => {
  const { weather, main } = weatherData;
  console.log(weatherData);
  function makeFirstLettersBig(word) {
    return word
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  function timeFormatter() {
    const date = new Date();
    const time = {
      hour: String(date.getHours()).padStart(2, 0),
      minute: String(date.getMinutes()).padStart(2, 0),
      day: String(date.getDate()).padStart(2, 0),
      month: String(date.getMonth() + 1).padStart(2, 0),
    };

    return time;
  }

  return (
    <div className="h-screen w-screen mt-24 mx-auto">
      <div className=" mx-auto bg-teal-500  max-w-md text-white px-8 py-6  rounded-xl shadow-xl grid grid-cols-3">
        <div className="flex flex-col items-start gap-2 col-start-1 col-end-3">
          <h1 className="text-4xl font-normal">{weatherData.name}</h1>
          <div className="text-lg flex gap-1 mb-12">
            <span>
              {timeFormatter().hour}:{timeFormatter().minute}
            </span>
            <span>&bull;</span>
            <span>
              {timeFormatter().day}/{timeFormatter().month}
            </span>
          </div>
          <span className="text-5xl">{Math.round(main.temp)}&#8451;</span>
        </div>
        <div className="flex flex-col text-center items-center justify-start">
          <Icons icon={weather[0].icon} />
          <div className="text-lg">
            {makeFirstLettersBig(weather[0].description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
