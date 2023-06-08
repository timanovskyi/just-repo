import { FetchTodosAction } from "./dispatch-fetch-todos.model";
import { DeleteTodoAction } from "./dispatch-delete-todo.model";

export enum ActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  DELETE_TODD = "DELETE_TODD",
}

export type AllActions = FetchTodosAction | DeleteTodoAction;
