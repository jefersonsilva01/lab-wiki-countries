import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";


function CountryDetails({ countries }) {
  const { id } = useParams(),
    [country, setCountry] = useState(null),

    baseURL = `https://ih-countries-api.herokuapp.com/countries/${id}`;

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setCountry(response.data)
    });
  }, [baseURL]);

  if (!country) return null;

  return (
    <div className="col-7">
      <img
        src={
          `https://flagcdn.com/w160/${country.alpha2Code.toLowerCase()}.png`
        }
        alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td styles="width: 30%">Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  country.borders.map((itemBorder, index) => {
                    const border = countries
                      .find(itemCountry => itemCountry.alpha3Code === itemBorder)

                    return (
                      <li key={index}>
                        <Link
                          to={`/${border.alpha3Code}`}>
                          {border.name.common}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;