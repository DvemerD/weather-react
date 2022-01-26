import { useSelector } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import WeatherListItem from '../weatherListItem/WeatherListItem';
import WeatherListItemAdd from '../weatherListItemAdd/WeatherListItemAdd';

import 'swiper/swiper.scss';
import "swiper/modules/navigation/navigation.scss";

SwiperCore.use([Navigation]);

const WeatherList = () => {
    const { cityWeatherList } = useSelector(state => state);

    const renderWeathers = cityWeatherList.map((item, i) => {
        return (
            <SwiperSlide key={i}>
                <WeatherListItem key={i} name={item} />
            </SwiperSlide>
        )
    });

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <Swiper
                        breakpoints={{
                            1440: {
                                slidesPerView: 3
                            },
                            960: {
                                slidesPerView: 2
                            }
                        }}
                        navigation
                        className="weather__list">
                        {renderWeathers}
                        <SwiperSlide>
                            <WeatherListItemAdd />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;