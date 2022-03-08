import React from "react"; 
import 'weather-icons/css/weather-icons.min.css'
// import Weather from './components/Weather';

const Weather= props=> {

    return (
      <div className="App" id="main-div">
        <div>
        <form>
            <div className="row" id="form">
              <div className="sm-6" style={{margin: 10}}>
                <input type="text" className="form-control" placeholder="Enter City..."/>
              </div>
              <div className="sm-6" style={{margin: 10}}>
                <input type="text" className="form-control" placeholder="Enter Country..."/>
              </div>
              <button className="btn btn-primary" style={{height:40,marginTop:10, marginLeft:5}}>Get Weather</button>
            </div>
          </form>
          
          <h1>{props.city},{props.country}</h1>
          {/* <i className="wi wi-day-sunny display-1"></i> */}
          <h2>{props.celsius}&deg;</h2>
          {minMaxTemp(props.minTemp,props.maxTemp)}
          <h4>{props.description}</h4>
        </div>
    </div>
    );
}

 function minMaxTemp(min,max){
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  )
}


export default Weather;