
import AppHeader from '../appHeader/AppHeader';
import AuthorizationForm from '../authorizationForm/AuthorizationForm';
import CitiesSearch from '../citiesSearch/CitiesSearch';
import WeatherInfo from '../weatherInfo/WeatherInfo';
import WeatherList from '../weatherList/WeatherList';
import BurgerMenu from '../burgerMenu/BurgerMenu';

const App = () => {
    return (
        <>
            <AppHeader />
            <WeatherList />
            <BurgerMenu />
        </>
    )
}

export default App;