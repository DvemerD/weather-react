
import WeatherListItem from '../weatherListItem/WeatherListItem';
import WeatherListItemAdd from '../weatherListItemAdd/WeatherListItemAdd';

import cloudyIcon from '../../assets/icons/cloudy-icon.svg';
// import rainIcon from '../../assets/icons/rain-icon.svg';
// import sunIcon from '../../assets/icons/sun-icon.svg';
// import stormIcon from '../../assets/icons/storm-icon.svg';
import snowingIcon from '../../assets/icons/snowing-icon.svg';
import cityImg from '../../assets/icons/city.svg';
import prevArrow from '../../assets/icons/prev-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg'

import './weatherList.scss';

const WeatherList = () => {
    const weathers = [
        {city: 'TUNISIA', icon: cloudyIcon, temp: 20, tempName: 'CLOUDY', tempMin: 18, tempMax: 26},
        {city: 'FINLAND', icon: snowingIcon, temp: 10, tempName: 'SNOWING', tempMin: -15, tempMax: 12}
    ]
    
    const renderWeathers = weathers.map(item => {
        return <WeatherListItem {...item} />
    })

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <img src={prevArrow} alt="prev arrow" className="arrow-prev " />
                    <img src={nextArrow} alt="next arrow" className=" arrow-next" />
                    <div className="weather__list">
                        {renderWeathers}
                        <WeatherListItemAdd/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;