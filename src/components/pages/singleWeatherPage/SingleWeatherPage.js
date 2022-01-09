

import ButtonBack from '../../buttonBack/ButtonBack';
import HeaderWeatherInfo from '../../headerWeatherInfo/HeaderWeatherInfo';
import TwitterFeed from '../../twitterFeed/TwitterFeed';
import WeatherDayList from '../../weatherDayList/WeatherDayList';

import './singleWeatherPage.scss';

const SingleWeatherPage = () => {
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