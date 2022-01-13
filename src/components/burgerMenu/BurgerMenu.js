import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { menuChangeActive } from '../../actions';

import userImg from '../../assets/icons/user.svg';

import './burgerMenu.scss';

const BurgerMenu = () => {
    const { menuActive, themeMode } = useSelector(state => state);
    const dispatch = useDispatch();

    const overlayClass = classNames("overlay", { "overlay_active": menuActive }),
        menuClass = classNames("menu", { "menu_active": menuActive });

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'menu-header-bgr',
            'menu-list-text-color',
            'menu-list-bgr'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    const onMenuActive = () => {
        dispatch(menuChangeActive());
    }

    return (
        <>
            <div className={overlayClass}
                onClick={(e) => { return e.target.className.indexOf('overlay', 1) > 0 ? onMenuActive() : null }}>
            </div>
            <div className={menuClass}>
                <div className="menu__wrapper">
                    <div className="menu__header">
                        <div className="menu__title">WELCOME BACK
                            <span className="menu__close"
                                onClick={() => onMenuActive()}>&#10006;</span>
                        </div>
                        <div className="menu__user">
                            <img src={userImg} alt="user thumbnail" className="menu__thumbnail" />
                            <div className="menu__mail">example@gmail.com</div>
                        </div>
                    </div>
                    <div className="menu__list">
                        <Link to="/"
                            className="menu__list-item"
                            onClick={() => onMenuActive()}>Home</Link>
                        <Link to="/search-city"
                            className="menu__list-item"
                            onClick={() => onMenuActive()}>Add City</Link>
                        <Link to="/signup"
                            className="menu__list-item"
                            onClick={() => onMenuActive()}>Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu;