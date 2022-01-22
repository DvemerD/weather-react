import { useSelector } from 'react-redux';

import WeatherListItem from '../weatherListItem/WeatherListItem';
import WeatherListItemAdd from '../weatherListItemAdd/WeatherListItemAdd';
import GlobalSvgSelector from '../../../../assets/icons/GlobalSvgSelector';

const WeatherList = () => {
    const { cityWeatherList } = useSelector(state => state);

    const renderWeathers = cityWeatherList.map((item, i) => {
        return <WeatherListItem key={i} name={item} />
    });

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <div className="arrow-prev ">
                        <GlobalSvgSelector  id="prev-arrow"/>
                    </div>
                    <div className=" arrow-next">
                        <GlobalSvgSelector  id="next-arrow"/>
                    </div>
                    <div className="weather__list">
                        {renderWeathers}
                        <WeatherListItemAdd />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;