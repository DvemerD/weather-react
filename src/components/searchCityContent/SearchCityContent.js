import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../spinner/Spinner';

import GlobalIconSvgSelector from '../../shared/GlobalIconSvgSelector';

const SearchCityContent = () => {
    const { themeMode,
        currentWeather,
        currentWeatherLoadingStatus } = useSelector(state => state);

    console.log('reCont');
    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'weather-search-bgr',
            'weather-search-title',
            'weather-search-content',
            'weather-search-text',
            'weather-search-degree',
            'weather-search-temp-name',
            'weather-search-btn',
            'weather-search-form-bgr'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode]);

    return (
        <div className="search__content">
            <div className="search__content-inner">
                {currentWeatherLoadingStatus === 'first-idle' ? <div className="search__name">Choose city</div> :
                    currentWeatherLoadingStatus === 'loading' ? <Spinner /> :
                        currentWeatherLoadingStatus === 'error' ? <div className="search__name">Loading error</div> :
                            <View data={currentWeather} />
                }
            </div>
        </div>
    )
}

const View = ({ data }) => {
    const { nameCity, description, icon, temp } = data;

    return (
        <>
            <h2 className="search__name">{nameCity}</h2>
            <div className="search__icon">
                <GlobalIconSvgSelector id={`${icon}-icon`} />
            </div>
            <h3 className="search__text">{temp}</h3>
            <div className="search__weather-name">{description}</div>
            <button className="search__btn">FOLLOWED</button>
        </>
    )
}

export default SearchCityContent;