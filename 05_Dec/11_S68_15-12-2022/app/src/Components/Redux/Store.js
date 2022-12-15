import { createStore, applyMiddleware, combineReducers } from "redux";
//import {creatStore,applymiddleware} from 'redux'
import myReducer from "./myReducer";
import cityReducer from "./cityReducer";
import logger from "redux-logger";

const combinedReducer = combineReducers({
  myReducer,
  cityReducer,
});

const myStore = createStore(combinedReducer, applyMiddleware(logger));
//const store = createStore(applyMiddleWare(logger))

export default myStore;
