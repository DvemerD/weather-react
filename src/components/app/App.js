
import AppHeader from '../appHeader/AppHeader';
import AuthorizationForm from '../authorizationForm/AuthorizationForm';
// import CitiesSearch from '../searchCityForm/SearchFrom';
// import WeatherInfo from '../weatherInfo/WeatherInfo';
// import WeatherList from '../weatherList/WeatherList';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import SingleSearchPage from '../pages/singleSearchPage/SingleSearchPage';

const App = () => {
    return (
        <>
            <AppHeader />
            <SingleSearchPage/>
            <BurgerMenu />
        </>
    )
}

export default App;