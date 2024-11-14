

// import React from 'react';
// import '../styles.css';
// import moment from 'moment';
// import { Card } from 'semantic-ui-react';
// import { FiRefreshCw } from 'react-icons/fi';

// const WeatherCard = ({ weatherData, fetchData }) => (
//   <Card className="weather-card">
//     <Card.Content>
//       <div className="top">
//         <span className="city-name">{weatherData.name}</span>
//         <button className="button" onClick={fetchData}>
//           <FiRefreshCw size={20} color="#0288d1" />
//         </button>
//       </div>
//       <div className="main">
//         <div className="day">{moment().format('dddd, MMMM D, YYYY')}</div>
//         <div className="description">{weatherData.weather[0].main}</div>
//         <div className="temp">Temperature: {weatherData.main.temp} &deg;C</div>
//         <div className="humidity">Humidity: {weatherData.main.humidity} %</div>
//         <div className="sunrise-sunset">
//           Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
//         </div>
//         <div className="sunrise-sunset">
//           Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
//         </div>
//       </div>
//     </Card.Content>
//   </Card>
// );

// export default WeatherCard;

import React from 'react';
import '../styles.css';
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import { FiRefreshCw } from 'react-icons/fi';

const WeatherCard = ({ weatherData, fetchData }) => (
  <Card className="weather-card">
    <Card.Content>
      <div className="top">
        <span className="city-name">{weatherData.name}</span>
        <button className="button" onClick={fetchData}>
          <FiRefreshCw size={20} color="#0288d1" />
        </button>
      </div>
      <div className="main">
        <div className="day">{moment().format('dddd, MMMM D, YYYY')}</div>
        <div className="description">{weatherData.weather[0].main}</div>
        <div className="temp">Temperature: {weatherData.main.temp} &deg;C</div>
        <div className="humidity">Humidity: {weatherData.main.humidity} %</div>
        <div className="sunrise-sunset">
          Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
        </div>
        <div className="sunrise-sunset">
          Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
        </div>
      </div>
    </Card.Content>
  </Card>
);

export default WeatherCard;

