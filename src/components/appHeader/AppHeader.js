import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { menuChangeActive, themeModeChange } from '../../actions';

import HeaderSvgSelector from './HeaderSvgSelector';
// import logo from '../../assets/icons/logo.svg';

import './appHeader.scss';


const AppHeader = () => {
    const { themeMode } = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleThemeClass = classNames("toggle-theme", {
        "toggle-theme_active": themeMode === 'dark'
    }),
        toggleBollClass = classNames("toggle-boll", {
            "toggle-boll_active": themeMode === 'dark'
        });

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'burger-menu',
            'logo-text',
            'header-bgr',
            'header-title',
            'toggle-name',
            'toggle-boll'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    })

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
                        <div className="header__menu-logo">
                            <HeaderSvgSelector id='logo' />
                        </div>

                        {/* <img className="header__menu-logo" src={logo} alt="Logo"/> */}
                    </div>
                    <div className="header__title">
                        <h1 className="header__title-day">TODAY</h1>
                    </div>
                    <div className="header__toggle">
                        <span className="header__toggle-name">LIGHT</span>
                        <input type="checkbox" id="toggle-theme" />
                        <label htmlFor="toggle-theme"
                            className={toggleThemeClass}
                            onClick={() => dispatch(themeModeChange())}>
                            <div className={toggleBollClass} ></div>
                        </label>
                        <span className="header__toggle-name">DARK</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;