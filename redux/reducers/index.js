import {combineReducers} from 'redux';
import lang1Reducer from './lang1Reducer';
import lang2Reducer from './lang2Reducer';


const allReducers = combineReducers({
    lang1:lang1Reducer,
    lang2:lang2Reducer
})

export default allReducers;