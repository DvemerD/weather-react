import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cityImgLight from '../../assets/icons/city-light.svg';
import cityImgDark from '../../assets/icons/city-dark.svg';

const WeatherListItemAdd = () => {
    const { themeMode } = useSelector(state => state);

    const cityImg = themeMode === 'light' ? cityImgLight : cityImgDark;

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'weather-item-add',
            'weather-item-add-line'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

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