import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthorizationForm = () => {
    const { themeMode } = useSelector(state => state);

    useEffect(() => {
        const root = document.querySelector(':root');
        const components = [
            'form-section-bgr',
            'form-bgr',
            'form-title-color',
            'form-btn-bgr',
            'form-subtitle-color'
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${themeMode})`
            )
        })
    }, [themeMode])

    return (
        <form className="form">
            <h1 className="form__title">Sign up</h1>
            <input type="email" className="form__mail" placeholder="Email" />
            <input type="password" className="form__password" placeholder="Password" />
            <input type="submit" className="form__btn" value="Sign up" />
            <p className="form__subtitle">Already have an account? <a href="#" className="form__link">LOG IN</a></p>
        </form>
    )
}

export default AuthorizationForm;