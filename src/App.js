import React, { useState } from 'react';
import './App.css';

const api_key = "4076cee936fb11c092a0c89086a37d21";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  const searchPressed = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
    }
  }

  return (
    <div className="App">
      {/* top start  */}

      <div className='container'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search City/Town...'
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchPressed}
          />
        </div>


        {typeof data.main !== "undefined" ? (
          <div className='content'>
            <div className='top-container'>
              <div className='location'>
                <h2>{data.name}</h2>
              </div>
              <div className='temp'>
                <h1>{data.main.temp} °C</h1>
              </div>
              <div className='feels-like'>
                <p>Feels like <span>{data.main.feels_like}°C</span></p>
              </div>
              <div className='description'>
                <p>{data.weather[0].main}</p>
                <p>({data.weather[0].description})</p>
              </div>
            </div>
             {/* top end  */}

             {/* bottom start  */}
             <div className='bottom-container'>
              <div className='first-row'>
              <div className='humidity'>
                  <p>Humidity</p>
                  <span>{data.main.humidity}%</span>
                </div>
                <div className='wind'>
                  <p>Wind speed</p>
                  <span>{data.wind.speed} km/h</span>
                </div>
                <div className='pressure'>
                  <p>Pressure</p>
                  <span>{data.main.pressure} hPa</span>
                </div>
              </div>
               <div className='second-row'>
               <div className='temp_max'>
                  <p>Maximum temperature</p>
                  <span>{data.main.temp_max} °C</span>
                </div>
                <div className='temp_min'>
                  <p>Minimum temperature</p>
                  <span>{data.main.temp_min} °C</span>
                </div>
               </div>
              </div>
              {/* bottom end  */}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>

  );
}

export default App;
