import React, { useEffect, useState } from "react";
import { countriesData } from "./api"; // Import API function

function Xcountries() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const actualData = await countriesData();
      console.log("Fetched data successfully:", actualData);
      setData(actualData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Country Flags</h2>
      <div className="container">
        <br />
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6" key={index}>
              <div className="card" style={{ padding: "15px" }}>
                <img src={item.flag} className="card-img-top" alt={item.abbr} />
                <p className="card-text" style={{ paddingTop: "10px", textAlign: "center" }}>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Xcountries;
