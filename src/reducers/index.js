const initialState = {
    menuActive: false,
    themeMode: 'dark',
    currentWeather: {},
    currentWeatherLoadingStatus: 'waiting',
    cityWeatherList: [],
    userDataStatus: 'waiting',
    userData: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_CHANGE_ACTIVE':
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case 'THEME_MODE_CHANGE':
            return {
                ...state,
                themeMode: state.themeMode === 'light' ? 'dark' : 'light'
            }
        case 'CURRENT_WEATHER_FETCHING':
            return {
                ...state,
                currentWeatherLoadingStatus: 'loading'
            }
        case 'CURRENT_WEATHER_FETCHED':
            return {
                ...state,
                currentWeather: action.payload,
                currentWeatherLoadingStatus: 'confirmed'
            }
        case 'CURRENT_WEATHER_FETCHING_ERROR':
            return {
                ...state,
                currentWeatherLoadingStatus: 'error'
            }
        case 'CURRENT_WEATHER_CLEAR':
            return {
                ...state,
                currentWeather: {},
                currentWeatherLoadingStatus: 'waiting'
            }
        case 'ADD_CITY_WEATHER_LIST':
            return {
                ...state,
                cityWeatherList: !state.cityWeatherList.includes(action.payload) ?
                    [...state.cityWeatherList, action.payload] : state.cityWeatherList
            }
        case 'LOGIN_USER_DATA': {
            return {
                ...state,
                userData: action.payload,
                userDataStatus: 'confirmed'
            }
        }
        case 'LOGOUT_USER_DATA':
            return {
                ...state,
                userData: {},
                userDataStatus: 'waiting'
            }
        default: return state
    }
}

export default reducer;