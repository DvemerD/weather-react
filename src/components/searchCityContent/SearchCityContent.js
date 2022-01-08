
import snowingIcon from '../../assets/icons/snowing-icon.svg';

const SearchCityContent = () => {
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