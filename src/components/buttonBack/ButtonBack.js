import { useHistory } from 'react-router-dom';

import arrowBack from '../../assets/icons/arrow-back.svg';

import './buttonBack.scss';

const ButtonBack = () => {
    const history = useHistory();

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