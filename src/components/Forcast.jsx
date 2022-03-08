import React from "react";

function Forcast({ temp, time, icon, desc }) {
  const icons = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="bg-warning">
      <img src={icons} alt="" />
      <p className="text-dark mx-2">{desc}</p>
      <p className="text-dark">Temp: {temp}</p>
      <p className="text-dark">Date: {time.split(" ")[0]}</p>
      <p className="text-dark">Time: {time.split(" ")[1]}</p>
    </div>
  );
}

export default Forcast;
