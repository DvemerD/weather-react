
import './weatherInfo.scss';

import arrowBack from '../../resources/icons/arrow-back.svg';
import twitterThumbnail from '../../resources/icons/twitter-thumbnail.svg';
import twitterIcon from '../../resources/icons/twitter-icon.svg';
import cloudyIcon from '../../resources/icons/cloudy-icon.svg';
import rainIcon from '../../resources/icons/rain-icon.svg';
import sunIcon from '../../resources/icons/sun-icon.svg';
import stormIcon from '../../resources/icons/storm-icon.svg';
import snowingIcon from '../../resources/icons/snowing-icon.svg';

const WeatherInfo = () => {
    return (
        <section class="weather-info">
            <div class="container">
                <div class="weather-info__background-circle"></div>
                <div class="weather-info__background-circle"></div>
                <div class="weather-info__background-circle"></div>
                <div class="weather-info__background-circle"></div>
                <div class="weather-info__back">
                    <button class="weather-info__back-btn">
                        <img src={arrowBack} alt="arrow back for button"/>
                    </button>
                    <div class="weather-info__back-text">BACK</div>
                </div>
                <div class="weather-info__wrapper">
                    <div class="weather-info__header">
                        <div>
                            <img src={cloudyIcon} alt="snowing-icon" class="weather-info__icon"/>
                                <div class="weather-info__text">
                                    <h3 class="weather-info__temp">15&deg;</h3>
                                    <div class="weather-info__name">CLOUDY</div>
                                </div>
                        </div>
                        <h2 class="weather-info__city">TUNISIA</h2>
                    </div>
                    <div class="weather-info__body">
                        <div class="twitter">
                            <div class="twitter__header">
                                <img src={twitterIcon} alt="twitter icon" class="twitter__icon"/>
                                    <h2 class="twitter__title">Twitter Feed</h2>
                                    <div class="twitter__hashtag">#France</div>
                            </div>
                            <div class="twitter__list">
                                <div class="twitter__list-item">
                                    <img src={twitterThumbnail} alt="twitter thumbnail"
                                        class="twitter__thumbnail"/>
                                        <p class="twitter__descr">Don't Forget your sunscreen tomorrow!</p>
                                </div>
                                <div class="twitter__list-item">
                                    <img src={twitterThumbnail} alt="twitter thumbnail"
                                        class="twitter__thumbnail"/>
                                        <p class="twitter__descr">Amazing weather in Paris!</p>
                                </div>
                            </div>
                            <button class="twitter__btn">NEXT</button>
                        </div>
                        <div class="days">
                            <div class="days-list">
                                <div class="day-item">
                                    <h3 class="day-item__name">MON</h3>
                                    <img src={rainIcon} alt="rain icon" class="day-item__icon"/>
                                        <div class="day-item__temp">9&deg;</div>
                                        <div class="day-item__temp-name">RAINING</div>
                                </div>
                                <div class="day-item">
                                    <h3 class="day-item__name">TUE</h3>
                                    <img src={sunIcon} alt="sun icon" class="day-item__icon"/>
                                        <div class="day-item__temp">15&deg;</div>
                                        <div class="day-item__temp-name">SUNNY</div>
                                </div>
                                <div class="day-item">
                                    <h3 class="day-item__name">WED</h3>
                                    <img src={cloudyIcon} alt="cloudy icon" class="day-item__icon"/>
                                        <div class="day-item__temp">11&deg;</div>
                                        <div class="day-item__temp-name">CLOUDY</div>
                                </div>
                                <div class="day-item">
                                    <h3 class="day-item__name">THU</h3>
                                    <img src={stormIcon} alt="storm icon" class="day-item__icon"/>
                                        <div class="day-item__temp">7&deg;</div>
                                        <div class="day-item__temp-name">STORM</div>
                                </div>
                                <div class="day-item">
                                    <h3 class="day-item__name">FRI</h3>
                                    <img src={sunIcon} alt="sun icon" class="day-item__icon"/>
                                        <div class="day-item__temp">18&deg;</div>
                                        <div class="day-item__temp-name">SUNNY</div>
                                </div>
                            </div>
                            <div class="days__avg">
                                <div class="days__avg-item">
                                    <div class="days__avg-name">Avg. Temp: <span
                                        class="days__avg-temp degrees">15&deg;</span></div>
                                </div>
                                <div class="days__avg-item">
                                    <div class="days__avg-name">Avg. Humd: <span class="days__avg-humb">78%</span></div>
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