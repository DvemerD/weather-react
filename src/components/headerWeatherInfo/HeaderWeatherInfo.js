import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import cloudyIcon from '../../assets/icons/cloudy-icon.svg';

const HeaderWeatherInfo = () => {
    const { themeMode } = useSelector(state => state);

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = ['weather-info-header'];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    return (
        <div className="weather-info__header">
            <div>
                <img src={cloudyIcon} alt="snowing-icon" className="weather-info__icon" />
                <div className="weather-info__text">
                    <h3 className="weather-info__temp">15&deg;</h3>
                    <div className="weather-info__name">CLOUDY</div>
                </div>
            </div>
            <h2 className="weather-info__city">TUNISIA</h2>
        </div>
    )
}

export default HeaderWeatherInfo;