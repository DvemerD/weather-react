import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import AuthorizationForm from '../authorizationForm/AuthorizationForm';
// import CitiesSearch from '../searchCityForm/SearchFrom';
import WeatherInfo from '../weatherInfo/WeatherInfo';
import WeatherList from '../weatherList/WeatherList';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import SingleFormPage from '../pages/singleFormPage/SingleFormPage';
import SingleSearchPage from '../pages/singleSearchPage/SingleSearchPage';
import SingleWeatherListPage from '../pages/singleWeatherListPage/SingleWeatherListPage';
import SingleWeatherPage from '../pages/singleWeatherPage/SingleWeatherPage';

const App = () => {
    return (
        <Router>
            <AppHeader />
            <Switch>
                <Route exact path="/">
                    <SingleWeatherListPage/>   
                </Route>
                <Route exact path="/search-city">
                    <SingleSearchPage />
                </Route>
                <Route exact path="/signup">
                    <SingleFormPage/>
                </Route>
                <Route exact path="/weather-info">
                    <SingleWeatherPage/>   
                </Route>
            </Switch>
            <BurgerMenu />
        </Router>
    )
}

export default App;