
// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const myLogger = store => next => action => {
    console.log(`Action : ${JSON.stringify(action)}`);
    console.log(`State before : ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`State after : ${JSON.stringify(upcomingState)}`);

    next(action);
}


const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;