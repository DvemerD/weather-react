import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChangeCssRootVariables from './model/ChangeCssRootVariables';

import AppHeader from './shared/appHeader/AppHeader';
import BurgerMenu from './shared/burgerMenu/BurgerMenu';

import SingleFormPage from './pages/singleFormPage/SingleFormPage';
import SingleSearchPage from './pages/singleSearchPage/SingleSearchPage';
import SingleWeatherListPage from './pages/singleWeatherListPage/SingleWeatherListPage';
import SingleWeatherPage from './pages/singleWeatherPage/SingleWeatherPage';
import Page404 from "./pages/page404/Page404";

const App = () => {
    const { themeMode } = useSelector(state => state);

    useEffect(() => {
        ChangeCssRootVariables(themeMode);
    }, [themeMode]);


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
                <Route exact path="/weather-info/:nameCity">
                    <SingleWeatherPage/>   
                </Route>
                <Route path="*">
                    <Page404/>
                </Route>
            </Switch>
            <BurgerMenu />
        </Router>
    )
}

export default App;