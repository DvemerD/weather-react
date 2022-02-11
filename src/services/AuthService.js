import { useHttp } from "../hooks/http.hook";
import useAuth from '../hooks/auth.hook';

const useAuthService = () => {
    const { request, clearError, process, setProcess } = useHttp();
    const { login } = useAuth();
    const registerHandler = async (data) => {
        const result = await request('/api/auth/register', 'POST', { ...data });
    }

    const loginHandler = async (data) => {
        const result = await request('/api/auth/login', 'POST', { ...data });
        login(result.token, result.userId);
    }

    return {
        registerHandler,
        loginHandler
    }
}

export default useAuthService;