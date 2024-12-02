import React, { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);

    if (celsiusValue === '') {
      setFahrenheit('');
    } else {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);

    if (fahrenheitValue === '') {
      setCelsius('');
    } else {
      const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Temperature Converter</h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>
      <div>
        <label style={{ marginRight: "10px" }}>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}
