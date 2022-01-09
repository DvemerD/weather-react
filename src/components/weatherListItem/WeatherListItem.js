import { Link } from 'react-router-dom';

import cloudyIcon from '../../assets/icons/cloudy-icon.svg';
// import rainIcon from '../../assets/icons/rain-icon.svg';
// import sunIcon from '../../assets/icons/sun-icon.svg';
// import stormIcon from '../../assets/icons/storm-icon.svg';
import snowingIcon from '../../assets/icons/snowing-icon.svg';
import cityImg from '../../assets/icons/city.svg';
import prevArrow from '../../assets/icons/prev-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg'

const WeatherListItem = ({ city, icon, temp, tempName, tempMin, tempMax }) => {
    return (
        <Link to="/weather-info">
            <div className="weather__list-item">
                <h2 className="city-name">{city}</h2>
                <img src={icon} alt="cloudy-icon" className="weather-icon" />
                <h3 className="temperature__text">{temp}</h3>
                <div className="temperature__name">{tempName}</div>
                <div className="temperture__containers">
                    <div className="temperture__min">{tempMin}</div>
                    <div className="temperture__max">{tempMax}</div>
                </div>
            </div>
        </Link>
    )
}

export default WeatherListItem;