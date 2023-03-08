import React from "react";

const WeatherCard = () => {
  const date = new Date();

  return (
    <div className="h-screen w-screen mt-24 mx-auto">
      <div className=" mx-auto bg-teal-500 max-w-[500px] text-white px-8 py-6  rounded-xl shadow-xl grid grid-cols-3">
        <div className="flex flex-col gap-2 col-start-1 col-end-3">
          <h1 className="text-4xl font-normal">Warszawa</h1>
          <div className="text-lg flex gap-1 mb-12">
            <span>
              {date.getHours()}:
              {date.getMinutes() < 9
                ? `0${date.getMinutes()}`
                : date.getMinutes()}
            </span>
            <span>&bull;</span>
            <span>
              {date.getDate()}/
              {date.getMonth() < 9
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1}
            </span>
          </div>
          <span className="text-5xl">9&#8451;</span>
        </div>
        <div className="flex flex-col items-center">
          <svg
            width="103"
            height="103"
            viewBox="0 0 103 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M81.5417 85.8333H12.875C5.76433 85.8333 0 80.069 0 72.9583C0 67.277 3.67984 62.4551 8.78609 60.7462C8.6525 59.8293 8.58333 58.8914 8.58333 57.9375C8.58333 47.2715 17.2298 38.625 27.8958 38.625C28.8621 38.625 29.8117 38.6959 30.7398 38.8329C33.57 26.4254 44.6725 17.1666 57.9375 17.1666C72.7639 17.1666 84.8888 28.7333 85.7807 43.3353C95.6015 45.3031 103 53.975 103 64.375C103 76.2261 93.3928 85.8333 81.5417 85.8333Z"
              fill="white"
            />
          </svg>
          <div className="text-lg">Light Rain</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
