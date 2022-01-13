import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import WeatherListItem from '../weatherListItem/WeatherListItem';
import WeatherListItemAdd from '../weatherListItemAdd/WeatherListItemAdd';
import WeatherListSvgSelector from './WeatherListSvgSelector';

const WeatherList = () => {
    const { themeMode } = useSelector(state => state);

    const weathers = [
        { city: 'TUNISIA', icon: 'cloudy-icon', temp: 20, tempName: 'CLOUDY', tempMin: 18, tempMax: 26 },
        { city: 'FINLAND', icon: 'snowing-icon', temp: 10, tempName: 'SNOWING', tempMin: -15, tempMax: 12 }
    ]

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = ['weather-list-bgr'];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    const renderWeathers = weathers.map((item, i) => {
        return <WeatherListItem key={i} {...item} />
    })

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <div className="arrow-prev ">
                        <WeatherListSvgSelector id="prev-arrow"/>
                    </div>
                    <div className=" arrow-next">
                        <WeatherListSvgSelector id="next-arrow"/>
                    </div>
                    <div className="weather__list">
                        {renderWeathers}
                        <WeatherListItemAdd />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;