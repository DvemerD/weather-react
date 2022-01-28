import { Link } from "react-router-dom";

const AuthorizationForm = () => {
    return (
        <form className="form">
            <h1 className="form__title">Sign up</h1>
            <input type="email" className="form__mail" placeholder="Email" />
            <input type="password" className="form__password" placeholder="Password" />
            <input type="submit" className="form__btn" value="Sign up" />
            <p className="form__subtitle">Already have an account? <Link to="/" className="form__link">LOG IN</Link></p>
        </form>
    )
}

export default AuthorizationForm;