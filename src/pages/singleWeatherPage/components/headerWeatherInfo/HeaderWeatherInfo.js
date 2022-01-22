
import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const HeaderWeatherInfo = () => {
    return (
        <div className="weather-info__header">
            <div>
                <div className="weather-info__icon">
                    <WeatherIconSvgSelector id={'clouds-icon'} />
                </div>
                <div className="weather-info__text">
                    <h3 className="weather-info__temp">15&deg;</h3>
                    <div className="weather-info__name">CLOUDY</div>
                </div>
            </div>
            <h2 className="weather-info__city">TUNISIA</h2>
        </div>
    )
}

export default HeaderWeatherInfo;