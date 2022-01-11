const initialState = {
    menuActive: false,
    themeMode: 'light'
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
        default: return state
    }
}

export default reducer;