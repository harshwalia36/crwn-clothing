import {createStore, applyMiddleware} from 'redux';
import logger from  'redux-logger';

import rootReducer from  './root-reducer';

const middlewares = [];   //logger console.log() actions,prevState and nextState

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

const store= createStore(rootReducer,applyMiddleware(...middlewares));

export default store;