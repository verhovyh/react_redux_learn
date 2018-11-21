import {createStore, applyMiddleware} from 'redux';

//import thunk from 'redux-thunk';
//import promiseMiddleware from 'redux-promise-middleware';

import {Reducer1} from '../reducers';


export const createAppStore = () => {
    const store = createStore(
        Reducer1, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};