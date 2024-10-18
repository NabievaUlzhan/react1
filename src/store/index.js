import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk";
import { projectsReducer } from "./projectsReducer";

const rootReducer = combineReducers({
  projectsReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));