const carsReducer = (state = {cars: []}, action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return {
                ...state,
                cars: [...state.cars, action.car]
            }
        default:
            return state;
    }
}

export default carsReducer;