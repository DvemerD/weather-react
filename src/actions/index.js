export const menuChangeActive = () => {
    return {
        type: 'MENU_CHANGE_ACTIVE'
    }
}

export const themeModeChange = () => {
    return {
        type: 'THEME_MODE_CHANGE'
    }
}

// CURRENT WEATHER

export const currentWeatherFetching = () => {
    return {
        type: 'CURRENT_WEATHER_FETCHING'
    }
}

export const currentWeatherFetched = (currentWeather) => {
    return {
        type: 'CURRENT_WEATHER_FETCHED',
        payload: currentWeather
    }
}

export const currentWeatherFetchingError = () => {
    return {
        type: 'CURRENT_WEATHER_FETCHING_ERROR'
    }
}