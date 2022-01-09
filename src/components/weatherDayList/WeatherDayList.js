
import WeatherListItem from '../weatherListItem/WeatherListItem';

import cloudyIcon from '../../assets/icons/cloudy-icon.svg';
import rainIcon from '../../assets/icons/rain-icon.svg';
import sunIcon from '../../assets/icons/sun-icon.svg';
import stormIcon from '../../assets/icons/storm-icon.svg';
import snowingIcon from '../../assets/icons/snowing-icon.svg';

const WeatherDayList = () => {
    return (
        <>
            <div className="days-list">
                <div className="day-item">
                    <h3 className="day-item__name">MON</h3>
                    <img src={rainIcon} alt="rain icon" className="day-item__icon" />
                    <div className="day-item__temp">9&deg;</div>
                    <div className="day-item__temp-name">RAINING</div>
                </div>
                <div className="day-item">
                    <h3 className="day-item__name">TUE</h3>
                    <img src={sunIcon} alt="sun icon" className="day-item__icon" />
                    <div className="day-item__temp">15&deg;</div>
                    <div className="day-item__temp-name">SUNNY</div>
                </div>
                <div className="day-item">
                    <h3 className="day-item__name">WED</h3>
                    <img src={cloudyIcon} alt="cloudy icon" className="day-item__icon" />
                    <div className="day-item__temp">11&deg;</div>
                    <div className="day-item__temp-name">CLOUDY</div>
                </div>
                <div className="day-item">
                    <h3 className="day-item__name">THU</h3>
                    <img src={stormIcon} alt="storm icon" className="day-item__icon" />
                    <div className="day-item__temp">7&deg;</div>
                    <div className="day-item__temp-name">STORM</div>
                </div>
                <div className="day-item">
                    <h3 className="day-item__name">FRI</h3>
                    <img src={sunIcon} alt="sun icon" className="day-item__icon" />
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
        </>
    )
}

export default WeatherDayList;