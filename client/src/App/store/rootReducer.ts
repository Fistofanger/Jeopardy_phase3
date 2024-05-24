import { combineReducers } from 'redux';
// import placeReducer from '../../pages/Place/reducer';
import authReducer from '../../pages/Auth/authReducer';
import themesReducre from '../../pages/Theme/themesReducer';

const rootReducer = combineReducers({
  // places: placeReducer,
  auth: authReducer,
  themes: themesReducre,
});

export default rootReducer;
