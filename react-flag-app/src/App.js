import React, { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Country Flags</h1>
      {loading ? (
        <p data-testid="loading-text">Loading...</p>
      ) : error ? (
        <p data-testid="error-text">Failed to load data: {error}</p>
      ) : (
        <div className="flags-container" data-testid="flags-container">
          {countries.map((country) => (
            <div key={country.code || country.name} className="country">
              <img 
                src={country.flag} 
                alt={`Flag of ${country.name}`} 
                className="flag" 
              />
              <p data-testid="country-name">{country.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
