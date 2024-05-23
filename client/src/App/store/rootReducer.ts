import { combineReducers } from 'redux';
// import placeReducer from '../../pages/Place/reducer';
import authReducer from '../../pages/Auth/authReducer';

const rootReducer = combineReducers({
  // places: placeReducer,
  auth: authReducer,
});

export default rootReducer;
