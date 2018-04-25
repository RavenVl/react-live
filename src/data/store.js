import {createStore} from 'redux';
import reducer from '../reducers';
const initStore = {
    table:[ [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]],
    size: 5
};
const store=createStore(reducer,initStore);
export default store;

