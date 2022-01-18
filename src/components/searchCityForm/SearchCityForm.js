import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import useWeatherService from '../../services/WeatherService';

import {
    currentWeatherFetching,
    currentWeatherFetched,
    currentWeatherFetchingError
} from '../../actions';

import searchIcon from '../../assets/icons/search-icon.svg';

const SearchCityForm = () => {
    const dispatch = useDispatch();
    const { getCurrentWeather } = useWeatherService();

    return (
        <Formik
            initialValues={{
                name: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Enter the name of the city')
            })}
            onSubmit={({ name }) => {
                dispatch(currentWeatherFetching());
                getCurrentWeather(name)
                    .then(data => {
                        dispatch(currentWeatherFetched(data));
                    })
                    .catch(() => dispatch(currentWeatherFetchingError()));
            }}>
            <Form className="form">
                <h2 className="form__title">SEARCH CITIES</h2>
                <div className="form__wrapper">
                    <Field
                        required
                        type="text"
                        className="form__name"
                        name="name" />
                    <button className="form__btn" type="submit">
                        <img src={searchIcon} alt="search icon" />
                    </button>
                </div>
                <FormikErrorMessage name="name" component="div"/>
            </Form>
        </Formik>
    )
}

export default SearchCityForm;