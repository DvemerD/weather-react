

const WeatherDayItem = () => {
    return (
        <div className="day-item">
            <h3 className="day-item__name">MON</h3>
            <img src="{rainIcon}" alt="rain icon" className="day-item__icon" />
            <div className="day-item__temp">9&deg;</div>
            <div className="day-item__temp-name">RAINING</div>
        </div>
    )
}

export default WeatherDayItem;