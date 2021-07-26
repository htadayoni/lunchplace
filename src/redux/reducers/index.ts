import {combineReducers} from "redux";
import {venues} from "./venues/reducers";
import {participants} from "./participants/reducers";
import {cache} from "./cache/reducers";

export const rootReducer = combineReducers({
  venues,
  participants,
  cache
})

export type RootState = ReturnType<typeof rootReducer>