import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    loginUserData,
    logoutUserData
} from '../actions';

const storageName = 'userData';

const useAuth = () => {
    const dispatch = useDispatch();

    const login = useCallback((jwtToken, id) => {
        dispatch(loginUserData({ jwtToken, id }))

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken
        }))
    }, []);

    const logout = useCallback(() => {
        dispatch(logoutUserData())

        localStorage.removeItem(storageName);
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.token) {
            login(data.token, data.userId);
        }

    }, [login]);
    return { login, logout }
}

export default useAuth;