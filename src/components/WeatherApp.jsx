import React, { useState } from "react";
import BGImage from "../assets/BG4.jpg"; 

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [showWeatherContainer, setShowWeatherContainer] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "daf1d43cdafb55d7336c660b638f35dc";

    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }

      let jsonResponse = await response.json();
      setWeatherData(`The weather in ${city} is ${jsonResponse.main.temp}°C`);
    } catch (error) {
      setWeatherData(`Error: ${error.message}`);
    }
  };

  const handleCardClick = () => {
    setShowWeatherContainer(true);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-20"
      style={{ backgroundImage: `url(${BGImage})`, backgroundSize: 'cover' }}
    >
      
      {!showWeatherContainer && (
        <div
          className="weather-card"
          style={{
            backgroundColor: "gray", 
            padding: "20px",
            borderRadius: "10px",
            cursor: "pointer",
            border: "2px solid black",
            fontSize: "large",
            fontWeight: "bold",
            color: "rgb(44, 48, 46)"
          }}
          onClick={handleCardClick}
        >
          Weather
        </div>
      )}

      
      {showWeatherContainer && (
        <div
          className="weather-container p-8 rounded-lg shadow-md w-full max-w-3xl mt-3"
          style={{
            backgroundColor: "rgb(85, 175, 50)", // Orange color for the container
            height: "350px",
            width: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid black",
            marginTop: "20px"
          }}
        >
          <h1 className="text-4xl mb-5 text-center">Weather</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Please Enter Your City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="py-2 px-4 border rounded"
              style={{
                width: "350px",
                height: "30px",
                backgroundColor: "rgb(218, 220, 222)",
                border: "2px solid black",
                justifyContent: "center",
              }}
            />
            <br /><br />
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition text-sm" style={{ marginLeft: "140px", border: "2px solid black" }}>Submit</button>
          </form>
          <p style={{ fontSize: "large", color: "rgb(76, 83, 81)" }}>{weatherData}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
