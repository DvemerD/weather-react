import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    loginUserData,
    logoutUserData
} from '../actions';

const storageName = 'userData';

const useAuth = () => {
    const dispatch = useDispatch();

    const login = useCallback((userData) => {
        dispatch(loginUserData(userData));
        localStorage.setItem(storageName, JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        dispatch(logoutUserData())

        localStorage.removeItem(storageName);
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data);
        }

    }, [login]);
    return { login, logout }
}

export default useAuth;