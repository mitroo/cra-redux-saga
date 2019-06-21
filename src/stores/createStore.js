import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (rootReducer, rootSaga) => {
    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware();

    middleware.push(sagaMiddleware);
    enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));

    const store = createStore(rootReducer, compose(...enhancers));

    sagaMiddleware.run(rootSaga);

    return store;
};
