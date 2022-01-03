import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/appHeader/AppHeader';
import AuthorizationForm from './components/authorizationForm/AuthorizationForm';
import CitiesSearch from './components/citiesSearch/CitiesSearch';
import WeatherInfo from './components/weatherInfo/WeatherInfo';
import WeatherList from './components/weatherList/WeatherList';

import './style.scss';

ReactDOM.render(
  <React.StrictMode>
    <>
      <AppHeader/>
      <WeatherList/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);