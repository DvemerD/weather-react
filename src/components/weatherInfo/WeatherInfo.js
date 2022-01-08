
import './weatherInfo.scss';

import arrowBack from '../../assets/icons/arrow-back.svg';
import twitterThumbnail from '../../assets/icons/twitter-thumbnail.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';
import cloudyIcon from '../../assets/icons/cloudy-icon.svg';
import rainIcon from '../../assets/icons/rain-icon.svg';
import sunIcon from '../../assets/icons/sun-icon.svg';
import stormIcon from '../../assets/icons/storm-icon.svg';
import snowingIcon from '../../assets/icons/snowing-icon.svg';

const WeatherInfo = () => {
    return (
        <section className="weather-info">
            <div className="container">
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__back">
                    <button className="weather-info__back-btn">
                        <img src={arrowBack} alt="arrow back for button"/>
                    </button>
                    <div className="weather-info__back-text">BACK</div>
                </div>
                <div className="weather-info__wrapper">
                    <div className="weather-info__header">
                        <div>
                            <img src={cloudyIcon} alt="snowing-icon" className="weather-info__icon"/>
                                <div className="weather-info__text">
                                    <h3 className="weather-info__temp">15&deg;</h3>
                                    <div className="weather-info__name">CLOUDY</div>
                                </div>
                        </div>
                        <h2 className="weather-info__city">TUNISIA</h2>
                    </div>
                    <div className="weather-info__body">
                        <div className="twitter">
                            <div className="twitter__header">
                                <img src={twitterIcon} alt="twitter icon" className="twitter__icon"/>
                                    <h2 className="twitter__title">Twitter Feed</h2>
                                    <div className="twitter__hashtag">#France</div>
                            </div>
                            <div className="twitter__list">
                                <div className="twitter__list-item">
                                    <img src={twitterThumbnail} alt="twitter thumbnail"
                                        className="twitter__thumbnail"/>
                                        <p className="twitter__descr">Don't Forget your sunscreen tomorrow!</p>
                                </div>
                                <div className="twitter__list-item">
                                    <img src={twitterThumbnail} alt="twitter thumbnail"
                                        className="twitter__thumbnail"/>
                                        <p className="twitter__descr">Amazing weather in Paris!</p>
                                </div>
                            </div>
                            <button className="twitter__btn">NEXT</button>
                        </div>
                        <div className="days">
                            <div className="days-list">
                                <div className="day-item">
                                    <h3 className="day-item__name">MON</h3>
                                    <img src={rainIcon} alt="rain icon" className="day-item__icon"/>
                                        <div className="day-item__temp">9&deg;</div>
                                        <div className="day-item__temp-name">RAINING</div>
                                </div>
                                <div className="day-item">
                                    <h3 className="day-item__name">TUE</h3>
                                    <img src={sunIcon} alt="sun icon" className="day-item__icon"/>
                                        <div className="day-item__temp">15&deg;</div>
                                        <div className="day-item__temp-name">SUNNY</div>
                                </div>
                                <div className="day-item">
                                    <h3 className="day-item__name">WED</h3>
                                    <img src={cloudyIcon} alt="cloudy icon" className="day-item__icon"/>
                                        <div className="day-item__temp">11&deg;</div>
                                        <div className="day-item__temp-name">CLOUDY</div>
                                </div>
                                <div className="day-item">
                                    <h3 className="day-item__name">THU</h3>
                                    <img src={stormIcon} alt="storm icon" className="day-item__icon"/>
                                        <div className="day-item__temp">7&deg;</div>
                                        <div className="day-item__temp-name">STORM</div>
                                </div>
                                <div className="day-item">
                                    <h3 className="day-item__name">FRI</h3>
                                    <img src={sunIcon} alt="sun icon" className="day-item__icon"/>
                                        <div className="day-item__temp">18&deg;</div>
                                        <div className="day-item__temp-name">SUNNY</div>
                                </div>
                            </div>
                            <div className="days__avg">
                                <div className="days__avg-item">
                                    <div className="days__avg-name">Avg. Temp: <span
                                        className="days__avg-temp degrees">15&deg;</span></div>
                                </div>
                                <div className="days__avg-item">
                                    <div className="days__avg-name">Avg. Humd: <span className="days__avg-humb">78%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherInfo;