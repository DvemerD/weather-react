
import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const HeaderWeatherInfo = ({ nameCity, dataWeather }) => {
    console.log()
    const { main: { temp }, weather: [{ main }] } = dataWeather;

    return (
        <div className="weather-info__header">
            <div>
                <div className="weather-info__icon">
                    <WeatherIconSvgSelector id={'clouds-icon'} />
                </div>
                <div className="weather-info__text">
                    <h3 className="weather-info__temp">{Math.round(temp)}&deg;</h3>
                    <div className="weather-info__name">{main}</div>
                </div>
            </div>
            <h2 className="weather-info__city">{nameCity}</h2>
        </div>
    )

}

export default HeaderWeatherInfo;