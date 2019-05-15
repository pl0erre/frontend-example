import {combineReducers, createStore, applyMiddleware, compose, Reducer} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {programReducer} from './program/Reducers';
import {ProgramActionTypes} from './program/Types';

export const rootReducer: Reducer<
    {
        program: ReturnType<typeof programReducer>;
    },
    ProgramActionTypes
> = combineReducers({
    program: programReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
