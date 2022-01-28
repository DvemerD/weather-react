import WeatherDayItem from '../weatherDayItem/WeatherDayItem';

const WeatherDayList = ({ dataWeather }) => {
    const daysWeather = dataWeather.map((item, i) => {
        return (
            <WeatherDayItem key={i} data={item} />
        )
    });

    return (
        <>
            <div className="days-list">
                {daysWeather}
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