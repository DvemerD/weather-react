import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const WeatherDayItem = () => {
    return (
        <div className="day-item">
            <h3 className="day-item__name">MON</h3>
            <div>
                <WeatherIconSvgSelector id={'rain-icon'}/>
            </div>
            <div className="day-item__temp">9&deg;</div>
            <div className="day-item__temp-name">RAINING</div>
        </div>
    )
}

export default WeatherDayItem;