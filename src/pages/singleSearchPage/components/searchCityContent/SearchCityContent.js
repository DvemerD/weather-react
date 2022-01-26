import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../../../shared/spinner/Spinner';

import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

import {currentWeatherClear, addCityWeatherList} from '../../../../actions';

const SearchCityContent = () => {
    const dispatch = useDispatch();
    const { currentWeather,
            currentWeatherLoadingStatus } = useSelector(state => state);

    useEffect(() => {
        return () => {
            dispatch(currentWeatherClear());
        }
    }, []);

    const onFollowedWeather = (name) => {
        dispatch(addCityWeatherList(name)); 
    }

    return (
        <div className="search__content">
            <div className="search__content-inner">
                {currentWeatherLoadingStatus === 'first-idle' ? <div className="search__name">Choose city</div> :
                    currentWeatherLoadingStatus === 'loading' ? <Spinner /> :
                        currentWeatherLoadingStatus === 'error' ? <div className="search__name">Loading error</div> :
                            <View data={currentWeather} onFollowedWeather={onFollowedWeather} />
                }
            </div>
        </div>
    )
}

const View = ({ data, onFollowedWeather }) => {
    const { nameCity, description, icon, temp } = data;

    return (
        <>
            <h2 className="search__name">{nameCity}</h2>
            <div className="search__icon">
                <WeatherIconSvgSelector id={`${icon}-icon`} />
            </div>
            <h3 className="search__text">{temp}</h3>
            <div className="search__weather-name">{description}</div>
            <Link to="/" 
                className="search__btn"
                onClick={() => {onFollowedWeather(nameCity)}}>FOLLOWED</Link>
        </>
    )
}

export default SearchCityContent;