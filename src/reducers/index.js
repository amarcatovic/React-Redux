import { combineReducers  } from 'redux';
import carsReducer from './cars';
import authReducer from './auth';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    cars: carsReducer,
    auth: authReducer,
})

export default rootReducer;