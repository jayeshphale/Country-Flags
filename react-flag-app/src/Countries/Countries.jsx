import React, { useEffect, useState } from "react";
import { countriesData } from "../api/api"; // Import API function
import styles from "./Countries.module.css";

export default function Countries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountriesData = async () => {
      setLoading(true);
      const result = await countriesData();
      setData(result);
      setLoading(false);
    };

    fetchCountriesData();
  }, []);

  return (
    <div className={styles.container}>
      <h3>Countries and Their Flags</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cardContainer}>
          {data.length > 0 ? (
            data.map((country, index) => (
              <div key={index} className={styles.card}>
                {country.flags?.png ? (
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    className={styles.img}
                  />
                ) : (
                  <p>No flag available</p>
                )}
                <h2>{country.name.common}</h2>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
}
