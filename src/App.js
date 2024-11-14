// import React, { useEffect, useState } from "react";
// import Weather from './components/weather';
// import './App.css';

// function App() {
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     if (lat && long) {
//       await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
//         .then(res => res.json())
//         .then(result => {
//           setData(result);
//           console.log(result);
//         });
//     }
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       setLat(position.coords.latitude);
//       setLong(position.coords.longitude);
//     });

//     fetchData();
//   }, [lat, long]);

//   return (
//     <div className="App">
//       {data && data.main ? (
//         <Weather weatherData={data} fetchData={fetchData} />
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import './App.css';

function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and set theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Set theme in localStorage
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const fetchData = async () => {
    if (lat && long) {
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <label className="theme-toggle-label">
        <input
          type="checkbox"
          className="theme-toggle"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(prevMode => !prevMode)}
        />
        <span className="slider"></span>
      </label>

      {data && data.main ? (
        <Weather weatherData={data} fetchData={fetchData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

