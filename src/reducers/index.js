import {combineReducers} from 'redux';
import counter from './counter';
import isLogged from './isLogged';

const rootReducer = combineReducers({
    counter : counter,
    isLogged : isLogged
});

export default rootReducer;