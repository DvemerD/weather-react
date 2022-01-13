import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ButtonBack from '../../buttonBack/ButtonBack';
import HeaderWeatherInfo from '../../headerWeatherInfo/HeaderWeatherInfo';
import TwitterFeed from '../../twitterFeed/TwitterFeed';
import WeatherDayList from '../../weatherDayList/WeatherDayList';

import './singleWeatherPage.scss';

const SingleWeatherPage = () => {
    const { themeMode } = useSelector(state => state);

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'circle-bgr-first',
            'circle-bgr-second'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    return (
        <section className="weather-info">
            <div className="container">
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <ButtonBack />
                <div className="weather-info__wrapper">
                    <HeaderWeatherInfo />
                    <div className="weather-info__body">
                        <TwitterFeed />
                        <div className="days">
                            <WeatherDayList />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleWeatherPage;