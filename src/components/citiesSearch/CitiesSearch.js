
import './citiesSearch.scss';

import searchIcon from '../../resources/icons/search-icon.svg';
import snowingIcon from '../../resources/icons/snowing-icon.svg';

const CitiesSearch = () => {
    return (
        <section class="search">
            <div class="container">
                <div class="search__wrapper">
                    <form class="form">
                        <h2 class="form__title">SEARCH CITIES</h2>
                        <div class="form__wrapper">
                            <input type="text" class="form__name"/>
                                <button class="form__btn"><img src={searchIcon} alt="search icon"/></button>
                        </div>
                    </form>
                    <div class="search__content">
                        <h2 class="search__name">FINLAND</h2>
                        <img src={snowingIcon} alt="snowing-icon" class="search__icon"/>
                            <h3 class="search__text">10</h3>
                            <div class="search__weather-name">SNOWING</div>
                            <button class="search__btn">FOLLOWED</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CitiesSearch;