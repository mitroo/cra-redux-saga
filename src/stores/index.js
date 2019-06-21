import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from './rootSaga';
import { reducer as login } from './Login/Reducers';

export default () => {
    const rootReducer = combineReducers({
        login
    });

    return configureStore(rootReducer, rootSaga);
}
