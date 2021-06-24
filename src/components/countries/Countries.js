import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "../countryDetails/CountryDetails.js";
import { Table } from "react-bootstrap";
import "./Countries.css";
import { WEATHER_API } from "../../common/constants.js";
import Weather from "../weather/Weather.js";

const Countries = () => {
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => setSearch(event.target.value);

  const setCountriesdata = () => {
    axios({
      method: "GET",
      url: WEATHER_API,
    }).then((response) => {
      const data = response.data.map((country) => {
        country.showDetails = false;
        return country;
      });

      setCountryList(data);
    });
  };

  useEffect(() => {
    setCountriesdata();
  }, []);

  const toggleDetails = (country) => {
    country.showDetails = !country.showDetails;
    setCountryList(filteredCountries);
  };

  const filteredCountries = countryList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container heading-margin">
      <div className="row">
        <div className="col">
          <h1>Check Weather Today</h1>
          <p>
            Please click on a country, or search for the name in search box.
          </p>
        </div>
      </div>

      <div className="row top-margin">
        <div className="col">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            className="search-input"
            placeholder="type country name here"
          />
        </div>
      </div>

      <div className="row top-margin">
        <div className="col">
          <Table striped>
            <tbody>
              {filteredCountries.map((country, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <span
                        onClick={() => toggleDetails(country)}
                        className={
                          country.showDetails ? "strong-name" : "small-name"
                        }
                      >
                        {country.name}
                      </span>
                    </div>
                    {country.showDetails && (
                      <div className="details">
                        <CountryDetail
                          name={country.name}
                          capital={country.capital}
                          population={country.population}
                          language={country.languages}
                          countryflag={country.flag}
                        />
                        <Weather selectedCountry={country} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Countries;
