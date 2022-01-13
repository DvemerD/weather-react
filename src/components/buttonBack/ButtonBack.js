import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';

import './buttonBack.scss';

const ButtonBack = () => {
    const history = useHistory();
    const { themeMode } = useSelector(state => state);
    
    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'button-back-bgr',
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    return (
        <div onClick={() => history.goBack()} 
              className="button__back">
            <button className="button__back-btn">
                <img src={arrowBack} alt="arrow back for button" />
            </button>
            <div className="button__back-text">BACK</div>
        </div>
    )
}

export default ButtonBack;