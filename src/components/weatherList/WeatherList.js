
import './weatherList.scss';

import cloudyIcon from '../../resources/icons/cloudy-icon.svg';
// import rainIcon from '../../resources/icons/rain-icon.svg';
// import sunIcon from '../../resources/icons/sun-icon.svg';
// import stormIcon from '../../resources/icons/storm-icon.svg';
import snowingIcon from '../../resources/icons/snowing-icon.svg';
import cityImg from '../../resources/icons/city.svg';
import prevArrow from '../../resources/icons/prev-arrow.svg';
import nextArrow from '../../resources/icons/next-arrow.svg'

const WeatherList = () => {
    return (
        <section class="weather">
            <div class="container">
                <div class="weather__wrapper">
                    <img src={prevArrow} alt="prev arrow" class="arrow-prev " />
                    <img src={nextArrow} alt="next arrow" class=" arrow-next" />
                    <ul class="weather__list">
                        <li class="weather__list-item">
                            <h2 class="city-name">TUNISIA</h2>
                            <img src={cloudyIcon} alt="cloudy-icon" class="weather-icon" />
                            <h3 class="temperature__text">20</h3>
                            <div class="temperature__name">CLOUDY</div>
                            <div class="temperture__containers">
                                <div class="temperture__min">18</div>
                                <div class="temperture__max">26</div>
                            </div>
                        </li>
                        <li class="weather__list-item">
                            <h2 class="city-name">FINLAND</h2>
                            <img src={snowingIcon} alt="snowing-icon" class="weather-icon" />
                            <h3 class="temperature__text">10</h3>
                            <div class="temperature__name">SNOWING</div>
                            <div class="temperture__containers">
                                <div class="temperture__min">-15</div>
                                <div class="temperture__max">12</div>
                            </div>
                        </li>
                        <li class="weather__list-item weather__list-item_add">
                            <h2 class="city-name">ADD CITY</h2>
                            <div class="city-plus"></div>
                            <img src={cityImg} alt="city images" class="city-img" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;