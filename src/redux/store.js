import {createStore, applyMiddleware} from 'redux';
import logger from  'redux-logger';

import rootReducer from  './root-reducer';

const middlewares = [logger];   //logger console.log() actions,prevState and nextState

const store= createStore(rootReducer,applyMiddleware(...middlewares));

export default store;