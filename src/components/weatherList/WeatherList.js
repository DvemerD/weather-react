
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
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <img src={prevArrow} alt="prev arrow" className="arrow-prev " />
                    <img src={nextArrow} alt="next arrow" className=" arrow-next" />
                    <ul className="weather__list">
                        <li className="weather__list-item">
                            <h2 className="city-name">TUNISIA</h2>
                            <img src={cloudyIcon} alt="cloudy-icon" className="weather-icon" />
                            <h3 className="temperature__text">20</h3>
                            <div className="temperature__name">CLOUDY</div>
                            <div className="temperture__containers">
                                <div className="temperture__min">18</div>
                                <div className="temperture__max">26</div>
                            </div>
                        </li>
                        <li className="weather__list-item">
                            <h2 className="city-name">FINLAND</h2>
                            <img src={snowingIcon} alt="snowing-icon" className="weather-icon" />
                            <h3 className="temperature__text">10</h3>
                            <div className="temperature__name">SNOWING</div>
                            <div className="temperture__containers">
                                <div className="temperture__min">-15</div>
                                <div className="temperture__max">12</div>
                            </div>
                        </li>
                        <li className="weather__list-item weather__list-item_add">
                            <h2 className="city-name">ADD CITY</h2>
                            <div className="city-plus"></div>
                            <img src={cityImg} alt="city images" className="city-img" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;