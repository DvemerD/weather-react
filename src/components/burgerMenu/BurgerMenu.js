
import './burgerMenu.scss';

import userImg from '../../resources/icons/user.svg';

const BurgerMenu = () => {
    return (
        <div className="overlay">
            <div className="container">
                <div className="menu">
                    <div className="menu__wrapper">
                        <div className="menu__header">
                            <div className="menu__title">WELCOME BACK</div>
                            <div className="menu__user">
                                <img src={userImg} alt="user thumbnail" className="menu__thumbnail"/>
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
            </div>
        </div>
    )
}

export default BurgerMenu;