import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _apiBase = 'https://api.openweathermap.org/data/2.5/';
    const _apiKey = '4c44eec66c4fd30e1d186eb2e26c0b02';

    const getCurrentWeather = async (cityName) => {
        const result = await request(`${_apiBase}weather?q=${cityName}&units=metric&appid=${_apiKey}`);
        return _transformCurrentWeather(result);
    }

    const getCurrentWeekWeather = async (cityName) => {
        const result = await request(`${_apiBase}forecast?q=${cityName}&units=metric&appid=${_apiKey}`);
        return result;
    }

    const _transformCurrentWeather = (res) => {
        return {
            nameCity: res.name,
            description: res.weather[0].main,
            icon: res.weather[0].main.toLowerCase(),
            temp: Math.round(res.main.temp),
            maxTemp: Math.round(res.main.temp_max),
            minTemp: Math.round(res.main.temp_min)
        }
    }

    return {
        getCurrentWeather,
        getCurrentWeekWeather    
    }
}

export default useWeatherService;