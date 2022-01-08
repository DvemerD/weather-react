import { useDispatch, useSelector } from 'react-redux';

import { menuChangeActive } from '../../actions';

import logo from '../../assets/icons/logo.svg';

import './appHeader.scss';

const AppHeader = () => {
    const { menuActive } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <div 
                            className="header__menu-boorger"
                            onClick={() => dispatch(menuChangeActive())}>
                            <span></span>
                        </div>
                        <img className="header__menu-logo" src={logo} alt="Logo"/>
                    </div>
                    <div className="header__title">
                        <h1 className="header__title-day">TODAY</h1>
                    </div>
                    <div className="header__toggle">
                        <span className="header__toggle-name">LIGHT</span>
                        <input type="checkbox" id="toggle-theme"/>
                            <label htmlFor="toggle-theme" className="toggle-theme">
                                <div className="toggle-boll"></div>
                            </label>
                            <span className="header__toggle-name">DARK</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;