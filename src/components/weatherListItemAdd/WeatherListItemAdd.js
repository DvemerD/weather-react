import { Link } from 'react-router-dom';

import cityImg from '../../assets/icons/city.svg';

const WeatherListItemAdd = () => {
    return (
        <div className="weather__list-item weather__list-item_add">
            <h2 className="city-name">ADD CITY</h2>
            <Link to="/search-city">
                <div className="city-plus"></div>
            </Link>
            <img src={cityImg} alt="city images" className="city-img" />
        </div>
    )
}

export default WeatherListItemAdd;