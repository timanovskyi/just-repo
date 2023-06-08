import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos";
import { StoreState } from "../models";

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
