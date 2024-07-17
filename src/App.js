import './App.css';

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// import jsonData from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const baseURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setCountries(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
