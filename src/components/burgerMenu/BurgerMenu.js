import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { menuChangeActive } from '../../actions';

import userImg from '../../assets/icons/user.svg';

import './burgerMenu.scss';

const BurgerMenu = () => {
    const { menuActive } = useSelector(state => state);
    const dispatch = useDispatch();

    const overlayClass = classNames("overlay", { "overlay-active": menuActive }),
        menuClass = classNames("menu", { "menu-active": menuActive });

    return (
        <>
            <div className={overlayClass}
                 onClick={(e) => { return e.target.className.indexOf('overlay', 1) > 0 ? dispatch(menuChangeActive()) : null }}>
            </div>
            <div className={menuClass}>
                <div className="menu__wrapper">
                    <div className="menu__header">
                        <div className="menu__title">WELCOME BACK
                            <span className="menu__close"
                                onClick={() => dispatch(menuChangeActive())}>&#10006;</span>
                        </div>
                        <div className="menu__user">
                            <img src={userImg} alt="user thumbnail" className="menu__thumbnail" />
                            <div className="menu__mail">example@gmail.com</div>
                        </div>
                    </div>
                    <ul className="menu__list">
                        <li className="menu__list-item">Home</li>
                        <li className="menu__list-item">Add City</li>
                        <li className="menu__list-item">Logout</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu;