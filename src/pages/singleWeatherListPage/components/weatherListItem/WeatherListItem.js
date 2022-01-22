import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useWeatherService from '../../../../services/WeatherService';

import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const WeatherListItem = ({ name }) => {
    const [currentWeather, setCurrentWeather] = useState({});
    const { getCurrentWeather } = useWeatherService();

    useEffect(() => {
        getCurrentWeather(name)
            .then(setCurrentWeather)
            .catch((err) => console.log(err));
    }, []);

    return (
        <View data={currentWeather}/>    
    )
}

const View = ({data}) => {
    const {nameCity, description, icon, temp, maxTemp, minTemp} = data;

    return (
        <Link to="/weather-info">
            <div className="weather__list-item">
                <h2 className="city-name">{nameCity}</h2>
                <div className="weather-icon">
                    <WeatherIconSvgSelector id={`${icon}-icon`} />
                </div>
                <h3 className="temperature__text">{temp}</h3>
                <div className="temperature__name">{description}</div>
                <div className="temperture__containers">
                    <div className="temperture__min">{minTemp}</div>
                    <div className="temperture__max">{maxTemp}</div>
                </div>
            </div>
        </Link>
    )
}

export default WeatherListItem;