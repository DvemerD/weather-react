import {useParams} from 'react-router-dom';

import ButtonBack from '../../shared/buttonBack/ButtonBack';
import HeaderWeatherInfo from './components/headerWeatherInfo/HeaderWeatherInfo';
import TwitterFeed from './components/twitterFeed/TwitterFeed';
import WeatherDayList from './components/weatherDayList/WeatherDayList';

import './singleWeatherPage.scss';

const SingleWeatherPage = () => {
    const {nameCity} = useParams();

    return (
        <section className="weather-info">
            <div className="container">
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <ButtonBack />
                <div className="weather-info__wrapper">
                    <HeaderWeatherInfo nameCity={nameCity}/>
                    <div className="weather-info__body">
                        <TwitterFeed />
                        <div className="days">
                            <WeatherDayList nameCity={nameCity}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleWeatherPage;