const authReducer = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true
            };
        case 'LOG_OFF':
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export default authReducer;