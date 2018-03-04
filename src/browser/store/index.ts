import {
  reducer as api,
  setEndpointHost,
  setEndpointPath,
} from "observable-redux-json-api";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import { UsersEpic } from "../components/Users";

const rootEpic = combineEpics(UsersEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = combineReducers<RootState>({
  api,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, epicMiddleware)),
);

store.dispatch(setEndpointHost("http://localhost:3000"));
store.dispatch(setEndpointPath(""));
