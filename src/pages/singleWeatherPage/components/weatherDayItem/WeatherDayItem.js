import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const WeatherDayItem = ({ data }) => {
    const { main: { temp }, weather: [{ main }], dt_txt } = data;
    const date = new Date(dt_txt).toString();

    return (
        <div className="day-item">
            <h3 className="day-item__name">{date.substr(0, 3)}</h3>
            <div className="day-item__icon">
                <WeatherIconSvgSelector id={main.toLowerCase()} />
            </div>
            <div className="day-item__temp">{Math.round(temp)}&deg;</div>
            <div className="day-item__temp-name">{main.toUpperCase()}</div>
        </div>
    )
}

export default WeatherDayItem;