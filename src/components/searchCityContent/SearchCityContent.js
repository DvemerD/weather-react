import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import snowingIcon from '../../assets/icons/snowing-icon.svg';

const SearchCityContent = () => {
    const { themeMode } = useSelector(state => state);

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
    }, [themeMode])

    return (
        <div className="search__content">
            <h2 className="search__name">FINLAND</h2>
            <img src={snowingIcon} alt="snowing-icon" className="search__icon"/>
                <h3 className="search__text">10</h3>
                <div className="search__weather-name">SNOWING</div>
                <button className="search__btn">FOLLOWED</button>
        </div>
    )
}

export default SearchCityContent;