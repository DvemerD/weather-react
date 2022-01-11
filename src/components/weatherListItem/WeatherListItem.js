import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GlobalIconSvgSelector from '../../shared/GlobalIconSvgSelector';

const WeatherListItem = ({ city, icon, temp, tempName, tempMin, tempMax }) => {
    const { themeMode } = useSelector(state => state);

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'weather-list-item-bgr',
            'weather-list-text',
            'weather-list-degree',
            'weather-list-temp-name'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    })
    
    return (
        <Link to="/weather-info">
            <div className="weather__list-item">
                <h2 className="city-name">{city}</h2>
                <div className="weather-icon">
                    <GlobalIconSvgSelector id={icon}/>
                </div>
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