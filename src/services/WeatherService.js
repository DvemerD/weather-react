import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _apiBase = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const _apiKey = '4c44eec66c4fd30e1d186eb2e26c0b02';

    const getWeather = async (cityName) => {
        const result = await request(`${_apiBase}${cityName}&appid=${_apiKey}`);
        return result;
    }

    return {
        getWeather    
    }
}

export default useWeatherService;