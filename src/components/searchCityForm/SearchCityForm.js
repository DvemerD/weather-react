
import searchIcon from '../../assets/icons/search-icon.svg';
import snowingIcon from '../../assets/icons/snowing-icon.svg';

const SearchCityForm = () => {
    return (
        <form className="form">
            <h2 className="form__title">SEARCH CITIES</h2>
            <div className="form__wrapper">
                <input type="text" className="form__name" />
                <button className="form__btn"><img src={searchIcon} alt="search icon" /></button>
            </div>
        </form>
    )
}

export default SearchCityForm;