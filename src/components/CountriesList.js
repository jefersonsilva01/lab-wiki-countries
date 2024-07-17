import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="col-5" styles={"max-height: 90vh; overflow: scroll"}>
      <div className="list-group">
        {
          countries.map((country, index) => {
            return (
              <Link
                key={index}
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
                style={{ textAlign: "left" }}>
                <img
                  src={
                    `https://flagpedia.net/data/flags/icon/20x15/${country.alpha2Code
                      .toLowerCase()}.png`
                  }
                  alt={country.name.official} />
                &nbsp; &nbsp;
                {country.name.common}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default CountriesList;