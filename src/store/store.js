import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./index";
import logger from "redux-logger";

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

export default store;
