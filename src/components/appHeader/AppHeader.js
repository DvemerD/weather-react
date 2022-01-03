
import './appHeader.scss';

import logo from '../../resources/icons/logo.svg';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__menu">
                        <div className="header__menu-boorger">
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