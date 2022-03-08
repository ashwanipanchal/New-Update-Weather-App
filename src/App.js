import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.min.css";
// import Weather from './components/Weather';
import axios from "axios";
import Forcast from "./components/Forcast";

const API_KEY = "03b65e5b66ee6cb40a435eafc29b317a";

function App() {
  const [searchvalue, setSearchValue] = useState("");
  const [forcast, setForcast] = useState([]);
  const [weather, setWeather] = useState({
    name: "",
    temp: "",
    icon: "",
    feels: "",
    desc: ""
  });

  const getWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&apikey=${API_KEY}&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        const lat = Math.round(res.data.coord.lat);
        const lon = Math.round(res.data.coord.lon);
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          )
          .then((response) => {
            console.log(response);
            setForcast(response.data.list);
          });
        setWeather({
          name: res.data.name,
          temp: res.data.main.temp,
          icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
          feels: res.data.main.feels_like,
          desc: res.data.weather[0].main
        });
        console.log(weather.name);
      });
  };

  return (
    <>
      <header>Weather Application</header>
      <div className="searchbox">
        <input
          className="form-control"
          type="text"
          value={searchvalue}
          placeholder="Enter City Name"
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className="btn btn-primary mx-2"
          onClick={getWeather}
          type="submit"
        >
          Get Weather
        </button>
      </div>

      <div className="weather_info">
        <h1 className="text-white text-center my-5">{weather.name}</h1>
        <h2 className="text-white text-center my-1">{weather.temp}</h2>
        <div className="text-center text-white">
          <img className="" src={weather.icon} alt="" />
          <p className="text-white">{weather.desc}</p>
        </div>
        {/* <h3 className="text-white text-center my-1">{weather.feels}</h3> */}
        <div className="container">
          <div className="row">
            {forcast.map((item) => {
              return (
                <Forcast
                  temp={item.main.temp}
                  time={item.dt_txt}
                  icon={item.weather[0].icon}
                  desc={item.weather[0].main}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
