import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useCitiesService from '../../../../services/CitiesService';
import setContent from '../../../../utils/setContent';

import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

import {currentWeatherClear, addCityWeatherList} from '../../../../actions';


const SearchCityContent = () => {
    const dispatch = useDispatch();
    const { currentWeather,
            currentWeatherLoadingStatus } = useSelector(state => state);
    const {addCities} = useCitiesService();

    useEffect(() => {
        return () => {
            dispatch(currentWeatherClear());
        }
       // eslint-disable-next-line 
    }, []);

    const onFollowedWeather = (name) => {
        addCities(name)
            .then(({city}) => console.log(city))
            .catch(err => console.log(err)); 
    }

    return (
        <div className="search__content">
            <div className="search__content-inner">
                {setContent(currentWeatherLoadingStatus, View, {data: currentWeather, onFollowedWeather})}
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