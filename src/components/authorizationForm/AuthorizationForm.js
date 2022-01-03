
import './authorizationForm.scss';

const AuthorizationForm = () => {
    return (
        <section class="form-authorization">
            <form class="form">
                <h1 class="form__title">Sign up</h1>
                <input type="email" class="form__mail" placeholder="Email" />
                <input type="password" class="form__password" placeholder="Password" />
                <input type="submit" class="form__btn" value="Sign up" />
                <p class="form__subtitle">Already have an account? <a href="#" class="form__link">LOG IN</a></p>
            </form>
        </section> 
    )
}

export default AuthorizationForm;